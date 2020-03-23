<template lang="pug">
	.cart__items
		.cart__title выбранные товары
		.cart__items-list
			item(
				v-for="item in items"
				:product="item"
				:key="item.id"
			)
		
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
    return {};
  }
};
</script>
