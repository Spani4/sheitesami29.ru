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
                span {{ getItemsPrice }} &#x20bd;
            .cart__totals-row
                span Стоимость доставки
                span {{ deliveryPrice }} &#x20bd;

            .cart__totals-row-result
                span итого к оплате:
                span {{ getItemsPrice + deliveryPrice }} &#x20bd;

</template>


<script>
import item from "./Item.vue";

export default {
  props: {
    items: Array
  },

  components: {
    item
  },

  data() {
    return {
      deliveryPrice: "250"
    };
  },

  computed: {
    getItemsPrice() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    }
  }
};
</script>
