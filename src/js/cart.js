import "../scss/cart.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobalScripts from "./global";

import Cart from "../vue/cart";



document.addEventListener('DOMContentLoaded', () => {
    

    initGlobalScripts();
    
    new Cart();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-background], [data-src]',
    });

});
