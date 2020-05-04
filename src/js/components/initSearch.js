const searchBlocks = document.querySelectorAll('.js-search');
const searchBtns = document.querySelectorAll('.js-search-btn');

function find(value) {

    if ( !value.length ) return;

    const a = document.createElement('a');
    const url = new URL('/search', document.location.origin);
    url.searchParams.set('search', value);
    a.href = url;
    a.click();
}

function initSearchBlock(searchBlock) {

    const btnCancel = searchBlock.querySelector('.js-search-btn-cancel');
    const btnGo = searchBlock.querySelector('.js-search-btn-go');
    const input = searchBlock.querySelector('.js-search-input');

    btnCancel.addEventListener('click', () => {
        searchBlock.classList.add('hidden');
    })

    btnGo.addEventListener('click', () => {
        find(input.value);
    });

    input.addEventListener('keydown', (e) => {
        console.log(e.key)
        if (e.key == 'Enter') find(input.value);
        if (e.key == 'Escape') searchBlock.classList.add('hidden');
    });
}


export default function() {

    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            searchBlocks.forEach((searchBlock) => {
                searchBlock.classList.toggle('hidden');
                searchBlock.querySelector('.js-search-input').focus();
            });
        });
    });

    searchBlocks.forEach((searchBlock) => {
        initSearchBlock(searchBlock);
    });

}