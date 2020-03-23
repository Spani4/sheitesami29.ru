import notyShow from '../utils/notyShow';
import { ApiCart } from '../utils/api';

const productItems = document.querySelectorAll('.js-product-item');


function initAddingToCart(productItem) {

    const cartBtn =  productItem.querySelector('.js-cart-add');
    const productId = productItem.dataset.productId;

    cartBtn.addEventListener('click', () => {

        const body = JSON.stringify({
            id: productId,
            count: 1
        });

        try {
            fetch(ApiCart.items, {
                method: 'POST',
                body
            }).then(response => {
                if ( !response.ok ) {
                    if ( response.statusText == "Conflict" ) {
                        notyShow('warning', 'Товар уже в корзине');
                    }
                    throw new Error;
                } else {
                    return response.json();
                }
            })
        } catch(err) {
            console.log(err);
            notyShow('error', 'Ошибка соединения');
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
        
    productItems.forEach(productItem => {
        initAddingToFavorites(productItem);
        initFavoritesLabels(productItem);
        initAddingToCart(productItem);
    });
}