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
        lazy: false,

        navigation: {
            nextEl: '.popular-products .js-next-btn',
            prevEl: '.popular-products .js-prev-btn',
        },
        
        lazy: {
            loadPrevNext: true,
        }
    },

    new: {
        
        loop: true,
        slidesPerView: 3,
        lazy: false,

        navigation: {
            nextEl: '.new-products .js-next-btn',
            prevEl: '.new-products .js-prev-btn',
        },

        lazy: {
            loadPrevNext: true,
        }        
    },
}