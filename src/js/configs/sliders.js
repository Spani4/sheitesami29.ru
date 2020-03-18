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
        slidesPerView: 1,
        // lazy: false,

        navigation: {
            nextEl: '.popular-products .js-next-btn',
            prevEl: '.popular-products .js-prev-btn',
        },
        
        lazy: {
            loadPrevNext: true,
        },

        breakpoints: {
            600: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    },

    new: {
        
        loop: true,
        slidesPerView: 1,
        // lazy: false,

        navigation: {
            nextEl: '.new-products .js-next-btn',
            prevEl: '.new-products .js-prev-btn',
        },

        lazy: {
            loadPrevNext: true,
        },
        
        breakpoints: {
            600: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }        
    },

    productCard: {
        slidesPerView: 4,

        // lazy: false,

        breakpoints: {
            600: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        },

        lazy: {
            loadPrevNext: true,
        },
    }
}