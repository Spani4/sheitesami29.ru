<template lang="pug">
    .cart__form

        .cart__form-group
            .cart__title информация о получателе
            .cart__form-group-wrapper
                .cart__form-col
                    label.cart__form-item
                        .required Фамилия
                        input.cart__form-input.form-input(type="text"
                            placeholder="Иванов"
                            v-model="orderData.surname"
                        )
                    label.cart__form-item
                        .required Имя
                        input.cart__form-input.form-input(type="text"
                            placeholder="Иван"
                            v-model="orderData.name"
                        )
                .cart__form-col
                    label.cart__form-item
                        .required e-mail
                        input.cart__form-input.form-input(type="text"
                            placeholder="ivan_ivanov777@gmail.com"
                            v-model="orderData.email"
                        )
                    label.cart__form-item
                        .required Телефон
                        input.cart__form-input.form-input(type="text"
                            placeholder="+7 (9__) ___-__-__"
                            :model="orderData.phone"
                            v-imask="phoneMask"
                            @accept="orderData.phone = $event.detail.unmaskedValue;"
                            @complete="orderData.phone = $event.detail.unmaskedValue;"
                        )

        .cart__form-group
            .cart__title доставка и оплата
            .cart__form-group-wrapper
                .cart__form-col
                    label.cart__form-item
                        .required Страна
                        input.cart__form-input.form-input(type="text"
                            placeholder="Россия"
                            v-model="orderData.country"
                        )
                    label.cart__form-item
                        .required Город
                        input.cart__form-input.form-input(type="text"
                            placeholder="Архангельск"
                            v-model="orderData.city"
                        )

                .cart__form-col

                    label.cart__form-item
                        .required Способ доставки
                        select.cart__form-input.form-input(
                            placeholder="Выберите способ доставки"
                            v-model="delivery"
                        )
                            option(
                                v-for="(option, index) in deliveryOptions"
                                :value="index"
                            ) {{ option.text }}

                    label.cart__form-item
                        .required Способ оплаты
                        select.cart__form-input.form-input(
                            placeholder="Выберите способ оплаты"
                            v-model="payment"
                        )
                            option(
                                v-for="(option, index) in paymentOptions"
                                :value="index"
                            ) {{ option.text }}
</template>

<script>

import { IMaskDirective } from "vue-imask";
import { eventBus } from '../';

export default {

    props: {
        orderData: Object,
    },

    data() {
        return {

            delivery: null,
            payment: null,

            deliveryOptions: [{
                text: 'Самовывоз с 11:00 до 19:00',
                price: 0,
                value: 'Самовывоз' // для api
            }, {
                text: 'Почтой России',
                price: 250,
                value: 'Доставка почтой'
            }, {
                text: 'Доставка СДЭК',
                price: 250,
                value: 'Доставка СДЭК'
            }],

            paymentOptions: [{
                    text: 'Онлайн оплата картой',
                    value: 'Онлайн',
                }, {
                    text: 'При получении (самовывоз)',
                    value: 'При получении'
                }],

            phoneMask: {
                mask: '+{7} (000) 000-00-00',
            }
        };
    },

    methods: {},

    computed: {},

    watch: {
        delivery(newVal) {
            this.orderData.deliveryPrice = this.deliveryOptions[this.delivery].price;
            this.orderData.delivery = this.deliveryOptions[this.delivery].value;
        },

        payment(newVal) {
            this.orderData.payment = this.paymentOptions[newVal].value;
            if ( newVal == 1 ) { // (если оплата при получении, переключить доставку на самовывоз)
                this.delivery = 0;
            }
        }
    },

    directives: {
        imask: IMaskDirective,    
    },
}
</script>

<style lang="scss" scoped>

</style>