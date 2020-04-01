<template lang="pug">

    .cart__items
        .cart__title выбранные товары
        .cart__items-list
            item(
                v-for="item in items"
                :product="item"
                :key="item.id"
            )
        .cart__totals
            .cart__totals-row
                span Стоимость товаров
                span {{ calculateItemsPrice }} &#x20bd;
            .cart__totals-row
                span Стоимость доставки
                span {{ deliveryPrice }} &#x20bd;

            .cart__totals-row-result
                span итого к оплате:
                span {{ deliveryPrice + calculateItemsPrice }} &#x20bd;

</template>


<script>
import item from "./Item.vue";

export default {
  props: {
    items: Array,
    deliveryPrice: Number,
  },

  components: {
    item
  },

  data() {
    return {};
  },

  computed: {
    calculateItemsPrice() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price * item.count;
      });
      return Number(total);
    }
  }
};
</script>
