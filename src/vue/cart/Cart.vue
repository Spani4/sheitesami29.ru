<script>
import Items from "./Items.vue";
import Form from "./Form.vue";

export default {

    components: {
        Form,
        Items
    },

    data() {
        return {

        };
    },
}
</script>

<template lang="pug">
    .cart
        form
        items

</template>