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
                :href="product._links.self.href"
            ) {{ product.title }}
            .cart-item__count
                .cart-item__count-control
                    .cart-item__count-btn(
                        @click=" product.count > 1 ? product.count-- : '' "
                    ) -
                    .cart-item__count-state {{ product.count }}
                    .cart-item__count-btn(
                        @click="product.count++"
                    ) +
                .cart-item__total-price {{ product.price * product.count }} &#x20bd;
        
</template>



<script>
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
        ...mapActions(['removeItemFromCart']),
    },
    
    created() {}
}
</script>

