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

            transition(name="fade")    
                ul.cart__errors(v-if="errors.length > 0")
                    li(
                        v-for="error in errors"
                        :key="error"
                        ) {{ error }}

            button.cart__send-btn.button(
                type="button"
                @click="send"
                :class="{ pending: isSending }"
                :disabled="isSending"
            ) {{ isSending ? 'Отправляем заказ...' : 'Подтвердить заказ' }}
            
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
            isSending: false,

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
                this.isSending = true;
            }
        },

        checkPaymentState() {

            const params = (new URL(document.location.href)).searchParams;
            if ( !params.has('code') ) return;

            const message =  params.get('message');

            if ( params.get('code') == 200 ) {
                const message2 = 'Подробности заказа отправлены на указанный адрес электронной почты.'
                showNoty('success', message, 30000);
                showNoty('success', message2, 30000);
            } else {
                showNoty('error', message, 30000);
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

.fade-enter,
.fade-leave {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}
</style>