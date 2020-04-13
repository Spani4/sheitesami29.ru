const productCard = document.querySelector('.js-product-item');
const rollElem = productCard.querySelector('.js-roll-elem');
const contents = productCard.querySelectorAll('.js-content');
const initialHeight = productCard.offsetHeight;

function initTabs() {
    
    const tabs = productCard.querySelectorAll('.js-tab');

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {

            if ( tab.classList.contains('active') ) return;

            tabs.forEach((tab, j) => {
                j == i ? tab.classList.add('active') : tab.classList.remove('active');
            });

            contents.forEach((content, j) => {

                if ( j == i ) {
                    content.classList.add('active');
                    initUnroll(content);
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}

function initUnroll(content) {

    const collapsible = content.querySelector('.js-collapsible');
    const rollBtn = content.querySelector('.js-roll-btn');

    rollBtn.onclick = rollToggle;

    if ( collapsible.offsetHeight >= collapsible.scrollHeight ) {
        rollBtn.classList.add('hidden');
    } else {
        rollBtn.classList.remove('hidden');
    }

    if ( rollElem.classList.contains('unrolled') && !(initialHeight == productCard.offsetHeight)) {
        rollBtn.classList.remove('hidden');
    }
}

function rollToggle() {
    rollElem.classList.toggle('unrolled');
}

export default function() {
    
    const activeContent = [...contents].find( content => content.classList.contains('active') );
    
    initTabs();
    initUnroll(activeContent);
}