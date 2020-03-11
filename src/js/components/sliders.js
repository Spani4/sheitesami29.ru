import "swiper/css/swiper.min.css";

import Swiper from 'swiper';

import sliderConfig from '../configs/sliders';



export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.main);

}

export function initPopularSlider() {

    const section = document.querySelector('.popular');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.popular);

}