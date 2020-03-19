import "../scss/catalog.scss";

import LazyLoad from "vanilla-lazyload";
import Vue from "vue";

import initGlobalScripts from "./global";

import Cart from "../vue/cart/Cart.vue";






document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-background], [data-src]',
    });

    initGlobalScripts();


    const vmCart = new Vue({
        el: '#cart',
        
        render: (h) => h(Cart),
    });

});
