export default {

    main: {

        slidesPerView: 1,

        navigation: {
            nextEl: '.main-slider .js-next-btn',
            prevEl: '.main-slider .js-prev-btn',
            disabledClass: 'disabled',
        },

    },

    popular: {
        
        loop: true,
        slidesPerView: 3,
        // spaceBetween: 120,
        lazy: false,

        navigation: {
            nextEl: '.popular .js-next-btn',
            prevEl: '.popular .js-prev-btn',
            // disabledClass: 'disabled',
        },

    },
}