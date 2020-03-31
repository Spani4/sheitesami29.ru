import Vue from "vue";

import cartCounter from "./cart-counter.vue";
import store from "../../store";

export default class Headers {

	constructor(selector) {
		new Vue({

			el: selector,
			
			store,

			components: {
				cartCounter,
			},

			created() {
				store.dispatch('fetchCartItems');
			}
		});
	}
}
