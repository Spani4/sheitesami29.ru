<template lang="pug">
	.counter(
		v-if="cartItems.length > 0"
		) {{ cartItems.length }}
</template>

<script>

import { mapState } from 'vuex';

export default {
	data() {
		return {

		};
	},

	computed: {
		...mapState(['cartItems']),
	},
}
</script>