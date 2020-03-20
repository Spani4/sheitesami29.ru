<script>
import cartItems from "./CartItems.vue";
import cartForm from "./CartForm.vue";


export default {

    props: {
        apiLinkCart: String,
    },

    components: {
        cartItems,
        cartForm,
    },

    data() {
        return {

        };
    },

    created() {
        // console.log(this);

        // fetch(this.apiLinkCart).then(response => {
        //     console.log(response);
        //     if ( !response.ok ) throw Error
        //     return response.json();
        // }).then(result => {
        //     console.log(result);
        // }).catch( err => {
        //     console.log(err);
        // });
    }
}
</script>

<template lang="pug">
    .cart__container
        .cart__details
            cart-form
            cart-items
        button.cart__send-btn.button(type="button") Подтвердить заказ

</template>