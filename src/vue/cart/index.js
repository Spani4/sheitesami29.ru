import Vue from "vue";

import App from "./App.vue";

const el = document.querySelector('#cart');
const apiLinkCart = el.dataset.apiLinkCart;

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