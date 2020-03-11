import "../scss/main.scss";

import LazyLoad from "vanilla-lazyload";

import { initMainPageSliders } from "./components/sliders";



document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initMainPageSliders();
});

