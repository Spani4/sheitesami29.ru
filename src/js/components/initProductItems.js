import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

import store from '../../store';
import showNoty from '../utils/showNoty';
import Favorites from './Favorites';

const productItems = document.querySelectorAll('.js-product-item');
const favorites = new Favorites(productItems);

const vmCart = new Vue({
    store,
    methods: {
        ...mapActions(['addItemToCart']),
    },
    computed: {
        ...mapState(['cartItems']),
    },
    watch: {
        cartItems(newCart) {
            markItemsInCart();
        }
    }
})

function markItemsInCart() {

    const cartIds = vmCart.cartItems.map(item => item.id);
    const itemsInCart = [...productItems].filter(item => {
        return cartIds.some(id => id == item.dataset.productId);
    });

    itemsInCart.forEach(item => {
        item.classList.add('in-cart')
        item.querySelector('.js-cart-add').disabled = true;
    });
}

function handleCartBtnClick(productItem) {

    if (productItem.classList.contains('in-cart')) {
        showNoty('warning', 'Товар уже в корзине');
        return;
    }

    const productId = productItem.dataset.productId;
    const item = JSON.stringify({
        id: productId,
        count: 1
    });

    vmCart.addItemToCart(item);
}

export default function () {

    if (!productItems.length) return;

    let isCooldown = false; //debounce

    favorites.markFavoriteItems();
    markItemsInCart();

    document.addEventListener('click', (e) => {

        if (e.target.closest('.js-favorite-add')) {
            const productItem = e.target.closest('.js-product-item');
            const productId = productItem.dataset.productId;
            favorites.handleFavoriteBtnClick(productId);
            return;
        }

        if (e.target.closest('.js-cart-add') && !isCooldown) {
            const productItem = e.target.closest('.js-product-item');
            handleCartBtnClick(productItem);
            isCooldown = true;
            setTimeout(() =>{ isCooldown = false}, 500);
        }
    });
}