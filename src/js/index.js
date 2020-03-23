import "../scss/main.scss";

import LazyLoad from "vanilla-lazyload";

import { initMainPageSliders } from "./components/sliders";
import initProductItems from "./components/initProductItems";
import initGlobalScripts from "./global";


function hideHeaderLogo() {
    //только для главной
    const logo = document.querySelector('.js-logo');
    logo.style.visibility = "hidden";
}


document.addEventListener('DOMContentLoaded', () => {
    
    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    hideHeaderLogo();
    initGlobalScripts();
    initMainPageSliders();
    initProductItems();
});

