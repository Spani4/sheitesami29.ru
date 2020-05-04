import "../scss/search-results.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobalScripts from "./global";


document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initGlobalScripts();
});
