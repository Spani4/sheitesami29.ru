<script>
export default {
    data() {
        return {

        };
    },
}
</script>

<template lang="pug">
    .cart__form

        .cart__form-group
            .cart__title информация о получателе
            .cart__form-row
                label.cart__form-item
                    .required Фамилия
                    input.cart__form-input.form-input(type="text"
                        placeholder="Иванов"
                    )
                label.cart__form-item
                    .required e-mail
                    input.cart__form-input.form-input(type="text"
                        placeholder="ivan_ivanov777@gmail.com"
                    )
            .cart__form-row
                label.cart__form-item
                    .required Имя
                    input.cart__form-input.form-input(type="text"
                        placeholder="Иван"
                    )
                label.cart__form-item
                    .required Телефон
                    input.cart__form-input.form-input(type="text"
                        placeholder="+7 (9__) ___-__-__"
                    )

        .cart__form-group
            .cart__title доставка и оплата
            .cart__form-row
                label.cart__form-item
                    .required Страна
                    input.cart__form-input.form-input(type="text"
                        placeholder="Россия"
                    )
                label.cart__form-item
                    .required Способ доставки
                    input.cart__form-input.form-input(type="text"
                        placeholder="Выберите способ доставки"
                    )
            .cart__form-row
                label.cart__form-item
                    .required Город
                    input.cart__form-input.form-input(type="text"
                        placeholder="Архангельск"
                    )
                label.cart__form-item
                    .required Способ оплаты
                    input.cart__form-input.form-input(type="text"
                        placeholder="Выберите способ оплаты"
                    )



</template>