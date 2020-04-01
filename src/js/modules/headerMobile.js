const headerMobile = document.querySelector('.js-header-mobile');

function initBurgerButton() {

    const burger = headerMobile.querySelector('.js-burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        headerMobile.classList.toggle('active');
    });
}

function initDropDowns() {

    const dropDowns = headerMobile.querySelectorAll('.js-dropdown');

    if ( dropDowns.legth == 0 ) return;

    dropDowns.forEach( item => {

        const btn = item.querySelector('.js-dropdown-btn');

        btn.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

export default function() {

    initBurgerButton();
    initDropDowns();
}