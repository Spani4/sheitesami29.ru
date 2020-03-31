import Vue from "vue";
import Vuex from "vuex";

import showNoty from '../js/utils/showNoty';
import api from '../js/configs/api';

Vue.use(Vuex);


export default new Vuex.Store({

	state: {
		cartItems: [],

		orderData: {},
	},

	actions: {

		fetchCartItems({commit, getters}) {

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

		addItemToCart({commit, getters}, item) {

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
		
		removeItemFromCart({commit, getters}, item) {
			
			const link = `${api.cartItems}/${item.id}`;
			
			fetch(link, {method: 'DELETE'}).then(response => {
				if ( !response.ok ) throw 'Ошибка соединения';
				commit('removeItemFromCart', item);
			}).catch( err => {
				showNoty('error', err);
			});
		}
	},

	mutations: {

		setCartItems(state, cartItems) {
			state.cartItems = cartItems;
		},

		addItemToCart(state, item) {
			state.cartItems.push(item);
		},
		
		removeItemFromCart(state, item) {
			state.cartItems = state.cartItems.filter(cartItem => cartItem.id != item.id);
		}
	},

	getters: {


	}

})