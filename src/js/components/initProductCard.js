const productCard = document.querySelector('.js-product-card');
const rollElem = productCard.querySelector('.js-roll-elem');

function initTabs() {
    
    const contents = productCard.querySelectorAll('.js-content');
    const tabs = productCard.querySelectorAll('.js-tab');

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {

            if ( tab.classList.contains('active') ) return;

            rollUp();

            tabs.forEach((tab, j) => {
                j == i ? tab.classList.add('active') : tab.classList.remove('active');
            });

            contents.forEach((content, j) => {
                j == i ? content.classList.add('active') : content.classList.remove('active');
            });
        });
    });
}

function initUnroll() {

    const rollBtns = productCard.querySelectorAll('.js-roll-btn');

    rollBtns.forEach( btn => {

        btn.addEventListener('click', () => {
            rollToggle();
        });
    });
}

function rollUp() {
    rollElem.classList.remove('unrolled');
}

function rollDown() {
    rollElem.classList.add('unrolled');
}

function rollToggle() {
    rollElem.classList.toggle('unrolled');
}

export default function() {
    
    initTabs();
    initUnroll();
}