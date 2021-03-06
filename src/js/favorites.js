import "../scss/favorites.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobalScripts from "./global";
import Favorites from "../vue/favorites";


document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initGlobalScripts();
    new Favorites();
});
