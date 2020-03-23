import Vue from "vue";

import App from "./App.vue";

const el = document.querySelector('#cart');
const apiLinkOrder = document.querySelector('[data-api-link-order]').dataset.apiLinkOrder;
const apiLinkCart = document.querySelector('[data-api-link-cart]').dataset.apiLinkCart;


export default class Cart {

    constructor() {

        const vmCart = new Vue({

            el,
    
            data: {
                test: 'test',
            },
            
            render: (h) => h(App,{
                props: {
                    apiLinkCart,
                }
            }),
        });
    }
}