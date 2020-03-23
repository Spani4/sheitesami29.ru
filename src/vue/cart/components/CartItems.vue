<script>
import item from "./Item.vue";

export default {
    components: {
        item,
    },

    data() {
        return {
            items: [
                {
                    title: 'MICRON ЛАПКА ДЛЯ ПРИШИВАНИЯ ШНУРОВ В БЛИСТЕРЕ',
                    price: '1060',
                    count: 1,
                    picture: '/images/product.jpg',
                    id: 2345
                },
                {
                    title: 'JANOME 517',
                    price: '9100',
                    count: 1,
                    picture: '/images/product.jpg',
                    id: 35324
                },
                {
                    title: 'MICRON ЛАПКА ДЛЯ ПРИШИВАНИЯ ШНУРОВ В БЛИСТЕРЕ',
                    price: '1060',
                    count: 1,
                    picture: '/images/product.jpg',
                    id: 23454
                },                
            ]
        };
    },
}
</script>

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