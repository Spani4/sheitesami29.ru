import "swiper/css/swiper.min.css";

import Swiper from 'swiper';

import sliderConfig from '../configs/sliders';



export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    new Swiper(swiperContainer, sliderConfig.main);
}

export function initPopularProductsSlider() {

    const section = document.querySelector('.popular-products');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    new Swiper(swiperContainer, sliderConfig.popular);
}

export function initNewProductsSlider() {

    const section = document.querySelector('.new-products');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    new Swiper(swiperContainer, sliderConfig.new);
}

export function initProductCardImageThumbs(productImage) {

    const section = document.querySelector('.js-image-thumbs');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const slides = swiperContainer.querySelectorAll('.swiper-slide');

    new Swiper(swiperContainer, sliderConfig.productCardImageThumbs);
  
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            productImage.style.backgroundImage = slide.style.backgroundImage;
        });
    });
}


export function initNewProductCardRelatedSlider() {

    const section = document.querySelector('.product-card__slider-section');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    new Swiper(swiperContainer, sliderConfig.productCardRelated);
}

export function initMainPageSliders() {
    
    initMainSlider();
    initPopularProductsSlider();
    initNewProductsSlider();
}