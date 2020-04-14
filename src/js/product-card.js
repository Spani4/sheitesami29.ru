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

    const productItem = document.querySelector('.js-product-item');
    const productImage = document.querySelector('.js-zoom');

    initGlobalScripts();
    initNewProductCardRelatedSlider();
    initProducrCard();
    
    const hasThumbs = initProductCardImageThumbs(productImage);
    if ( !hasThumbs ) productItem.classList.add('compact');

    initZoom(productImage);
});
