import "../scss/product-card.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobalScripts from "./global";
import { initNewProductCardSlider } from "./components/sliders";
import initProducrCard from "./components/initProductCard";
import initZoom from "./utils/initZoom";


document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initGlobalScripts();
    initNewProductCardSlider();
    initProducrCard();

    initZoom(document.querySelector('.js-zoom'));
});
