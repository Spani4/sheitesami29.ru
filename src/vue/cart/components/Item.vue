<template lang="pug">

    .cart-item
        .cart-item__remove-btn(
            @click=""
        ) &times;
        .cart-item__image(
            :style="{ backgroundImage: `url(${product.picture})` }"
        )
            //- .cart-item__avalability в наличии
        .cart-item__details
            .cart-item__title(
                :title="product.title"
            ) {{ product.title }}
            .cart-item__count
                .cart-item__count-control
                    .cart-item__count-btn(
                        @click=" product.count > 1 ? product.count-- : ''"
                    ) -
                    .cart-item__count-state {{ product.count }}
                    .cart-item__count-btn(
                        @click=" product.count++ "
                    ) +
                .cart-item__total-price {{ product.price * product.count }} &#x20bd;
        
</template>



<script>
export default {

    props: {
        product: Object,
    },

    data() {
        return {
            
        };
    },
    
    created() {
        console.log(this.product);
    }
}
</script>

