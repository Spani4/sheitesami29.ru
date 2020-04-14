import Vue from "vue";
import Vuex from "vuex";

import showNoty from '../js/utils/showNoty';
import api from '../js/configs/api';

Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		cartItems: [],

		orderData: {},

		cartLoaded: false,
	},

	actions: {

		fetchCartItems({commit}) {

			const link = api.cartItems;
			
			fetch(link).then(response => {
				if ( !response.ok ) throw 'Произошла ошибка при загрузке корзины. Попробуйте снова.';
				return response.json();
			}).then(result => {
				commit('setCartItems',result._embedded.items);
			}).catch( err => {
				showNoty('error', err);
			});
		},

		addItemToCart({commit}, item) {

			const link = api.cartItems;

			fetch(link, {
				method: 'POST',
				body: item,
			}).then(response => {
				if ( !response.ok ) {
					if ( response.statusText == "Conflict" ) {
						showNoty('warning', 'Товар уже в корзине');
					} else {
						throw new Error;
					}
				} else {
					return response.json();
				}
			}).then(item => {
				if (!item) return;
				commit('addItemToCart', item);
				showNoty('success', 'Товар добавлен в корзину');
			}).catch(err => {
				showNoty('error', 'Ошибка соединения');
			});
		},

		sendItemCount({commit}, item) {

			const link = `${api.cartItems}/${item.id}`;
			const body = JSON.stringify([{op: "add", path: "/count", value: item.count}]);

			fetch(link, { method: 'PATCH', body })
				.catch(e => console.log(e));
		},
		
		removeItemFromCart({commit}, item) {
			
			const link = `${api.cartItems}/${item.id}`;
			
			fetch(link, {method: 'DELETE'}).then(response => {
				if ( !response.ok ) throw 'Ошибка соединения';
				commit('removeItemFromCart', item);
			}).catch( err => {
				showNoty('error', err);
			});
		},

		sendOrder({state, commit}) {

			const link = api.orders;
			const body = JSON.stringify(state.orderData);

			fetch(link, { method: 'POST', body })
				.then(response => response.json())
				.then(result => {
					const a = document.createElement('a');

					if ( result._links.payment ) {
						a.href = result._links.payment.href;
						a.click();
					} else {
						a.href = `${document.location.href}?code=200&message=Заказ успешно оформлен`;
					}
					a.click();
				}).catch(err => {
					console.error('Sending order error');
					console.error(err);
				});
		}
	},

	mutations: {

		setCartItems(state, cartItems) {
			state.cartItems = cartItems;
			state.cartLoaded = true;
		},

		addItemToCart(state, item) {
			state.cartItems.push(item);
		},
		
		removeItemFromCart(state, item) {
			state.cartItems = state.cartItems.filter(cartItem => cartItem.id != item.id);
		},

		formValidOrderData(state, orderData) {
			state.orderData['ФИО'] = `${orderData.surname} ${orderData.name}`;
			state.orderData['Страна'] = orderData.country;
			state.orderData['Город'] = orderData.city
			state.orderData['Телефоны'] = [orderData.phone];
			state.orderData['Электронные почты'] = [orderData.email];
			state.orderData['Способ получения'] = orderData.delivery;
			state.orderData['Способ оплаты'] = orderData.payment;
		}
	},

	getters: {}

})