<script>
import cartItems from "./components/CartItems.vue";
import orderForm from "./components/OrderForm.vue";


export default {

    props: {
        apiLinkCart: String,
    },

    components: {
        cartItems,
        orderForm,
    },

    data() {
        return {

        };
    },

    created() {
        // console.log(this);

        fetch(`${this.apiLinkCart}/items`, {
            // credentials:'include',
        }).then(response => {
            console.log(response);
            if ( !response.ok ) throw Error
            return response.json();
        }).then(result => {
            console.log(result);
        }).catch( err => {
            console.log(err);
        });
    }
}
</script>

<template lang="pug">
    .cart__container
        .cart__details
            order-form
            cart-items
        button.cart__send-btn.button(type="button") Подтвердить заказ

</template>