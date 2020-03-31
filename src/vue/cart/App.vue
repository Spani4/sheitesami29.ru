<template lang="pug">
    .cart__container
        div(v-if="cartItems.length > 0")
            .cart__details
                order-form(
                    :orderData="orderData"
                )
                cart-items(
                    :items="cartItems"
                    :deliveryPrice="orderData.deliveryPrice"
                )

            transition(name="grow")    
                ul.cart__errors(v-if="errors.length > 0")
                    li(
                        v-for="error in errors"
                        :key="error"
                        ) {{ error }}

            button.cart__send-btn.button(
                type="button"
                @click="send"
            ) Подтвердить заказ
        empty-cart(v-else)
</template>


<script>
import { mapState } from 'vuex';

import cartItems from "./components/CartItems.vue";
import orderForm from "./components/OrderForm.vue";
import emptyCart from "./components/EmptyCart.vue";
import showNoty from '../../js/utils/showNoty';
import store from "../../store";

export default {

    store,

    components: {
        cartItems,
        orderForm,
        emptyCart,
    },


    data() {
        return {
            errors: [],

            orderData: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                country: '',
                city: '',
                delivery: '',
                payment: '',
                deliveryPrice: 0,
            }
        };
    },

    methods: {
        validateData() {
            let errors = [];
            
            if ( this.orderData.name.trim().length == 0 ) errors.push('Вы не указали имя');

            if ( this.orderData.surname.trim().length == 0 ) errors.push('Вы не указали фамилию');

            if ( !(/^.+@.+\..+$/.test(this.orderData.email)) )  errors.push('Некорректный email');

            if ( this.orderData.phone.length == 0 )  errors.push('Не указан номер телефона')
            else if ( this.orderData.phone.length < 11 )  errors.push('Некорректный номер телефона');

            if ( this.orderData.country.trim().length == 0 ) errors.push('Не указана страна доставки');
            if ( this.orderData.city.trim().length == 0 ) errors.push('Не указан город доставки');
            if ( this.orderData.delivery.trim().length == 0 ) errors.push('Укажите способ доставки');
            if ( this.orderData.payment.trim().length == 0 ) errors.push('Укажите способ оплаты');

            return errors;
        },


        send() {
            this.errors = this.validateData();

        },
    },

    computed: {
        ...mapState(['cartItems']),
    },

    created() {}
}
</script>

<style lang="scss" scoped>

.grow-enter,
.grow-leave {
    opacity: 0;
}

.grow-enter-active,
.grow-leave-active {
    transition: opacity .3s;
}
</style>