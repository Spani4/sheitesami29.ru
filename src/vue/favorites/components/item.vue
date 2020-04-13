<template lang="pug">
.favorite-item
    button.favorite-item__remove-btn(
        type="button"
        @click="$emit('remove')"
    ) &times;
    .favorite-item__image(
        :style="{ backgroundImage: `url('${itemImage}')` }"
    )
    .favorite-item__info
        h3.favorite-item__title(:title="item.title") 
            a(:href="item.pageRef") {{ item.title }}
        .favorite-item__price {{ item.price }} &#x20bd;
    button.favorite-item__cart-btn.button(
        @click="addToCart"
        :disabled="isInCart"
    ) В корзину
        
</template>


<script>
import { mapState } from 'vuex';
import noImage from '../../../images/no-image.svg';

export default {
    props: {
        item: Object,
    },

    methods: {
        addToCart() {
            const item = JSON.stringify({
                id: this.item.id,
                count: 1
            });
            this.$store.dispatch('addItemToCart', item);
        },
    },

    computed: {
        ...mapState(['cartItems']),

        isInCart() {
            return this.cartItems.some(cartItem => cartItem.id == this.item.id);
        },

        itemImage() {

            return this.item.picture ? this.item.picture : noImage ;
        }
    }
    
}
</script>