<template lang="pug">
section.section
    .favorites__message(v-if="!items.length")
        p(v-if="!loading") Здесь будут отображаться избранные товары
        p(v-if="loading") Загружаем избранное...
    .favorites__list
        transition-group(name="list" tag="div")
            .favorites__item(
                v-for="item in items"
                :key="item.id"
                )
                item(
                    :item="item"
                    @remove="remove(item.id)"
                    )
</template>


<script>

import item from './components/item.vue';
import api from '../../js/configs/api';

export default {

    components: {
        item,
    },

    data() {
        return {
            items: [],
            loading: true,
        };
    },

    methods: {
        remove(id) {
            const newFavorites = this.getFavoriteItems().filter(item => item != id);
            this.items = this.items.filter(item => item.id != id);
            this.setStorageFavorites(newFavorites);
        },

        fixStorageFavorites(items) {
            const newFavoriteIds = this.items.map(item => item.id);
            this.setStorageFavorites(newFavoriteIds);
        },

        setStorageFavorites(favorites) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        },

        getFavoriteItems() {
            const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
            return favoriteItems;
        },
    },

    computed: {},

    created() {

        if ( !this.getFavoriteItems() ) {
            this.loading = false;
            return;
        }

        fetch(api.favorites, {
            method: 'POST',
            body: JSON.stringify(this.getFavoriteItems()),
        })
            .then(response => response.json())
            .then(result => {

                this.items = result._embedded.items;
                this.loading = false;

                if ( this.items.length < this.getFavoriteItems().length ) {
                    this.fixStorageFavorites();
                }
            }).catch(err => {
                console.error('Unable to fetch favorites');
                console.error(err);
            });
    }
}
</script>

<style lang="scss" scoped>

.list-enter-active,
.list-leave-active {
    transition: all .3s;
}

.list-enter {
    opacity: 0;
}
.list-leave-active {
    opacity: 0;
}
//             //- transition-group(name="list" tag="div")

</style>