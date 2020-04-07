<template lang="pug">

    .cart-item
        .cart-item__remove-btn(
            @click="removeItemFromCart(product)"
        ) &times;
        .cart-item__image(
            :style="{ backgroundImage: `url(${product.picture})` }"
        )
            //- .cart-item__avalability в наличии
        .cart-item__details
            a.cart-item__title(
                :title="product.title"
                :href="product.pageRef"
            ) {{ product.title }}
            .cart-item__count
                .cart-item__count-control
                    .cart-item__count-btn(
                        @click="decreaseCount"
                    ) -
                    .cart-item__count-state {{ product.count }}
                    .cart-item__count-btn(
                        @click="increaseCount"
                    ) +
                .cart-item__total-price {{ product.price * product.count }} &#x20bd;
        
</template>



<script>
import debounce from 'lodash.debounce';
import { mapActions } from 'vuex';

export default {

    props: {
        product: Object,
    },

    data() {
        return {
            
        };
    },

    methods:  {
        ...mapActions([
            'removeItemFromCart',
            'sendItemCount'
        ]),

        decreaseCount() {
            if ( !(this.product.count > 1) ) return;
            this.product.count--;
            this.debouncedSetItemCount();
        },

        increaseCount() {
            this.product.count++;
            this.debouncedSetItemCount();
        },

        debouncedSetItemCount: debounce(function() {
            this.sendItemCount(this.product);
        }, 500),
    },
}
</script>

