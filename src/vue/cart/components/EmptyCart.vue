<template lang="pug">

	.cart__empty
		svg.cart__empty-icon.icon
			use(href="/icons/icons.svg#cart")
		.cart__empty-text
			p В вашей корзине пока ничего нет!
			p Желаем приятных покупок
		a.cart__empty-catalog-link.button(href="/Katalog") Перейти в каталог

</template>



<script>
export default {

	data() {
		return {
			
		};
	},

}
</script>

