import Vue from "vue";

import cartCounter from "./cart-counter.vue";
import store from "../../store";

const apiLinkCart = document.querySelector('[data-api-link-cart]').dataset.apiLinkCart;

export default class Headers {

	constructor(selector) {
		new Vue({

			el: selector,
			
			store,

			components: {
				cartCounter,
			},

			created() {
				store.commit('setCartApi', apiLinkCart);
				store.dispatch('fetchCartItems');
			}
		});
	}
}
