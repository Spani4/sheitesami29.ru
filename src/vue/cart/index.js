import Vue from "vue";

import App from "./App.vue";

const el = document.querySelector('#cart');


export default class Cart {

    constructor() {

        const vmCart = new Vue({

            el,
    
            data: {},
            
            render: (h) => h(App),
        });
    }
}