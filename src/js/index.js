import "../scss/main.scss";

import LazyLoad from "vanilla-lazyload";

import { initMainSlider, initPopularSlider } from "./components/sliders";



document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initMainSlider();
    initPopularSlider();
});

