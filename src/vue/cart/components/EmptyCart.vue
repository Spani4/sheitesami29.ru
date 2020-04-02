<template lang="pug">

	.cart__empty
		svg.cart__empty-icon.icon
			use(href="/icons/icons.svg#cart")
		template(v-if="cartLoaded")
			.cart__empty-text
				p В вашей корзине пока ничего нет!
				p Желаем приятных покупок
			a.cart__empty-catalog-link.button(href="/Katalog/Shveynoe-oborudovanie/") Перейти в каталог
		template(v-else)
			.cart__empty-text
				p Загрузка корзины...
</template>



<script>
import { mapState } from 'vuex';

export default {

	computed: {
		...mapState(['cartLoaded']),
	}
}
</script>

