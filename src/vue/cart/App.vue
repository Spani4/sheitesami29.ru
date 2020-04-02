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
import { mapState, mapActions, mapMutations } from 'vuex';

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

        ...mapActions(['sendOrder']),
        ...mapMutations(['formValidOrderData']),

        validateData() {
            let errors = [];
            
            if ( !(/^.{1,50}$/.test(this.orderData.name)) ) errors.push('Вы не указали имя');

            if ( !(/^.{1,50}$/.test(this.orderData.surname)) ) errors.push('Вы не указали фамилию');

            if ( !(/^.+@.+\..+$/.test(this.orderData.email)) )  errors.push('Некорректный email');

            if ( this.orderData.phone.length == 0 )  errors.push('Не указан номер телефона')
            else if ( this.orderData.phone.length < 11 )  errors.push('Некорректный номер телефона');

            if ( !(/^.{1,50}$/.test(this.orderData.country)) ) errors.push('Не указана страна доставки');
            if ( !(/^.{1,50}$/.test(this.orderData.city)) ) errors.push('Не указан город доставки');
            if ( this.orderData.delivery.length == 0 ) errors.push('Укажите способ доставки');
            if ( this.orderData.payment.length == 0 ) errors.push('Укажите способ оплаты');

            return errors;
        },

        send() {
            this.errors = this.validateData();

            if ( !this.errors.length ) {
                this.formValidOrderData(this.orderData)
                this.sendOrder();
            }
        },

        checkPaymentState() {

            const params = (new URL(document.location.href)).searchParams;
            if ( !params.has('code') ) return;

            const message =  params.get('message');

            if ( params.get('code') == 400 ) {
                showNoty('error', message, 10000);
                return;
            }

            if ( params.get('code') == 200 ) {
                showNoty('success', message, 10000);
                return;
            }
        },
    },

    computed: {
        ...mapState(['cartItems']),
    },

    created() {
        this.checkPaymentState();
    }
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