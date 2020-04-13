import Vue from "vue";

import App from "./App.vue";
import store from "../../store";
const el = document.querySelector('#favorites');

export default class Favorites {

    constructor() {

        const vmFavorites = new Vue({

            el,
            store,
            data: {},
            
            render: (h) => h(App),
        });
    }
}