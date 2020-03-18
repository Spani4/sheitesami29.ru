import "swiper/css/swiper.min.css";

import Swiper from 'swiper';

import sliderConfig from '../configs/sliders';



export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.main);

}

export function initPopularProductsSlider() {

    const section = document.querySelector('.popular-products');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.popular);

}

export function initNewProductsSlider() {

    const section = document.querySelector('.new-products');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.new);
}

export function initNewProductCardSlider() {

    const section = document.querySelector('.product-card__slider-section');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.productCard);
}

export function initMainPageSliders() {
    
    initMainSlider();
    initPopularProductsSlider();
    initNewProductsSlider();
}