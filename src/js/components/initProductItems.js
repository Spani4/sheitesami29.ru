import notyShow from './notyShow';

const productItems = document.querySelectorAll('.js-product-item');
const apiLinkCart = document.querySelector('[data-api-link-cart]').dataset.apiLinkCart;

let apiCart;



function initAddingToCart(productItem) {

    const cartBtn =  productItem.querySelector('.js-cart-add');
    const productId = productItem.dataset.productId;

    cartBtn.addEventListener('click', () => {

        const body = JSON.stringify({
            id: productId,
            count: 1
        });

        try {
            fetch(apiCart._links.items.href,{
                method: 'POST',
                // credentials:'include',
                body
            })
            .then(response => {
                if ( !response.ok ) {
                    throw new Error;
                } else {
                    console.log(response);
                    return response.json();
                }
            }).then(result => {
                console.log(result)
                return result;
            })
        } catch(err) {
            console.log(err);
            notyShow('error', 'Произошла ошибка. Перезагрузите страницу');
        }
        

    });
}


function initAddingToFavorites(productItem) {

    const favoriteBtn =  productItem.querySelector('.js-favorite-add');
    const productId = productItem.dataset.productId;

    favoriteBtn.addEventListener('click', () => {
        const storageFavorites = JSON.parse(localStorage.getItem('favorites'));
        const favorites = storageFavorites ? storageFavorites : [];

        const isFavorite = favorites.some( id => id == productId );

        if ( isFavorite ) {
            notyShow('warning', 'Товар уже в избранном');
        } else {
            favorites.push(productId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            initFavoritesLabels();
            notyShow('success', 'Товар добавлен в избранное');
        }        
    });
}


function initFavoritesLabels() {

    const storageFavorites = JSON.parse(localStorage.getItem('favorites'));
    if ( !storageFavorites ) return;
    if ( !storageFavorites.length ) return;

    storageFavorites.forEach( id => {

        const filteredById = [...productItems].filter(productItem => productItem.dataset.productId == id);

        filteredById.forEach( filteredItem => {
            const favoriteLabel = filteredItem.querySelector('.js-favorite-label');
            if ( !favoriteLabel ) return;
            favoriteLabel.classList.add('active');
        });
    });
}


export default function() {

    if ( !productItems.length ) return;


    // ЗАХАРДКОДИТЬ ССЫЛКА
    fetch(apiLinkCart).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error;
        }
    }).then(result => {
        
        apiCart = result;
        productItems.forEach(productItem => {
            initAddingToCart(productItem);
        });
    }).catch(err => {
        notyShow('error', 'Произошла ошибка при загрузке страницы');
    });

    productItems.forEach(productItem => {
        initAddingToFavorites(productItem);
        initFavoritesLabels(productItem);
    });
}