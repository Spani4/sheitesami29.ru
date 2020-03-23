<template lang="pug">
    .cart__container
        div(v-if="items.length > 0")
            .cart__details
                order-form
                cart-items(:items="items")
                
            button.cart__send-btn.button(type="button") Подтвердить заказ
        empty-cart(v-else)
</template>


<script>
import cartItems from "./components/CartItems.vue";
import orderForm from "./components/OrderForm.vue";
import emptyCart from "./components/EmptyCart.vue";

import { ApiCart } from '../../js/utils/api';
import notyShow from '../../js/utils/notyShow';
import showNoty from '../../js/utils/notyShow';


export default {

    props: {
        apiLinkCart: String,
    },

    components: {
        cartItems,
        orderForm,
        emptyCart,
    },

    data() {
        return {
            items: []
        };
    },

    created() {

        fetch(ApiCart.items).then(response => {
            console.log(response);
            if ( !response.ok ) throw 'Произошла ошибка при загрузке корзины';
            return response.json();
        }).then(result => {
            console.log(result);
            this.items = result._embedded.items;
            console.log(this.items);
        }).catch( err => {
            console.log(err);
            showNoty('error', err);
        });
    }
}
</script>