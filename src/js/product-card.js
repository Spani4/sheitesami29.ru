import "../scss/product-card.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobalScripts from "./global";
import { initNewProductCardSlider } from "./components/sliders";


document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initGlobalScripts();
    initNewProductCardSlider();
});
