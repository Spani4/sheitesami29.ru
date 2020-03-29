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
                            v-model="surname"
                        )
                    label.cart__form-item
                        .required Имя
                        input.cart__form-input.form-input(type="text"
                            placeholder="Иван"
                            v-model="name"
                        )
                .cart__form-col
                    label.cart__form-item
                        .required e-mail
                        input.cart__form-input.form-input(type="text"
                            placeholder="ivan_ivanov777@gmail.com"
                            v-model="email"
                        )
                    label.cart__form-item
                        .required Телефон
                        input.cart__form-input.form-input(type="text"
                            placeholder="+7 (9__) ___-__-__"
                            :model="phone"
                            v-imask="phoneMask"
                            @accept="phone = $event.detail.unmaskedValue;"
                            @complete="phone = $event.detail.unmaskedValue;"
                        )

        .cart__form-group
            .cart__title доставка и оплата
            .cart__form-group-wrapper
                .cart__form-col
                    label.cart__form-item
                        .required Страна
                        input.cart__form-input.form-input(type="text"
                            placeholder="Россия"
                            v-model="country"
                        )
                    label.cart__form-item
                        .required Город
                        input.cart__form-input.form-input(type="text"
                            placeholder="Архангельск"
                            v-model="city"
                        )
                .cart__form-col
                    label.cart__form-item
                        .required Способ доставки
                        select.cart__form-input.form-input(
                            placeholder="Выберите способ доставки"
                            v-model="delivery"
                        )
                            option(
                                v-for="option in deliveryOptions"
                            ) {{ option }}
                    label.cart__form-item
                        .required Способ оплаты
                        select.cart__form-input.form-input(
                            placeholder="Выберите способ оплаты"
                            v-model="payment"
                        )
                            option(
                                v-for="option in paymentOptions"
                            ) {{ option }}
</template>

<script>

import { IMaskDirective } from "vue-imask";
import { eventBus } from '../';

export default {

    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            country: 'Россия',
            city: '',
            delivery: '',
            payment: '',

            deliveryOptions: ['Самовывоз с 11:00 до 19:00', 'Почтой России', 'Доставка СДЭК'],
            paymentOptions: ['Онлайн оплата картой', 'При получении (самовывоз)'],

            phoneMask: {
                mask: '+{7} (000) 000-00-00',
            }
        };
    },

    methods: {
        
        validate() {
            let errors = [];
            
            if ( this.name.trim().length == 0 ) errors.push('Вы не указали имя');

            if ( this.surname.trim().length == 0 ) errors.push('Вы не указали фамилию');

            if ( !(/^.+@.+\..+$/.test(this.email)) )  errors.push('Некорректный email');

            if ( this.phone.length == 0 )  errors.push('Не указан номер телефона')
            else if ( this.phone.length < 11 )  errors.push('Некорректный номер телефона');

            if ( this.country.trim().length == 0 ) errors.push('Не указана страна доставки');
            if ( this.city.trim().length == 0 ) errors.push('Не указан город доставки');
            if ( this.delivery.trim().length == 0 ) errors.push('Укажите способ доставки');
            if ( this.payment.trim().length == 0 ) errors.push('Укажите способ оплаты');

            eventBus.$emit('validated', errors)

        }
    },

    computed: {
    },

    watch: {
        payment(newVal) {
            if ( newVal == 'При получении (самовывоз)' ) {
                this.delivery = 'Самовывоз с 11:00 до 19:00';
            }
        }
    },

    directives: {
        imask: IMaskDirective,    
    },

    created() {
        eventBus.$on('check-form', () => {
            this.validate();
        })
    }
}
</script>

<style lang="scss" scoped>

</style>