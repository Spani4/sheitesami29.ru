import "swiper/css/swiper.min.css";

import Swiper from 'swiper';

import sliderConfig from '../configs/sliders';



export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.main);
}

export function initPopularProductsSlider() {

    const section = document.querySelector('.popular-products');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.popular);
}

export function initNewProductsSlider() {

    const section = document.querySelector('.new-products');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.new);
}

export function initNewProductCardSlider() {

    const section = document.querySelector('.product-card__slider-section');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.productCard);
}

export function initMainPageSliders() {
    
    initMainSlider();
    initPopularProductsSlider();
    initNewProductsSlider();
}