import "../scss/product-card.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobalScripts from "./global";
import {
    initProductCardImageThumbs,
    initNewProductCardRelatedSlider
} from "./components/sliders";

import initProducrCard from "./components/initProductCard";
import initZoom from "./utils/initZoom";


document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    const productImage = document.querySelector('.js-zoom');

    initGlobalScripts();
    initProductCardImageThumbs(productImage);
    initNewProductCardRelatedSlider();
    initProducrCard();

    initZoom(productImage);
});
