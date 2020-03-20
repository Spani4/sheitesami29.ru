import "../scss/cart.scss";

import LazyLoad from "vanilla-lazyload";
import Vue from "vue";

import initGlobalScripts from "./global";

import App from "../vue/cart/App.vue";



document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-background], [data-src]',
    });

    const apiLinkCart = document.querySelector('#cart').dataset.apiLinkCart;

    initGlobalScripts();

    const vmCart = new Vue({
        el: '#cart',

        data: {
            test: 'test',
        },
        
        render: (h) => h(App,{
            props: {
                apiLinkCart,
            }
        }),
    });

});
