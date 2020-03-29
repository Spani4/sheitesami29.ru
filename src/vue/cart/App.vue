<template lang="pug">
    .cart__container
        div(v-if="cartItems.length > 0")
            .cart__details
                order-form
                cart-items(:items="cartItems")

            transition(name="grow")    
                ul.cart__errors(v-if="errors.length > 0")
                    li(
                        v-for="error in errors"
                        :key="error"
                        ) {{ error }}

            button.cart__send-btn.button(
                type="button"
                @click="checkform"
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
import { eventBus } from './';

const apiLinkOrder = document.querySelector('[data-api-link-order]').dataset.apiLinkOrder;

export default {

    store,

    components: {
        cartItems,
        orderForm,
        emptyCart,
    },


    data() {
        return {
            items: [],
            errors: []
        };
    },

    methods: {

        checkform() {
            eventBus.$emit('check-form');
        },
    },

    computed: {
        ...mapState(['cartItems']),
    },

    created() {
        store.commit('setOrderApi', apiLinkOrder);

        eventBus.$on('validated', errors => {
            this.errors = errors
        });
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