export default class Favorites {

    constructor(productItems) {
		this.productItems = productItems;
	}

    handleFavoriteBtnClick(productId) {

        const storageFavorites = JSON.parse(localStorage.getItem('favorites'));

        if ( !storageFavorites ) {
            this.addToFavorites(productId);
            this.markItemsById(productId);
            return;
        }
        
        const isFavorite = storageFavorites.some( id => id == productId );
        if ( isFavorite ) {
            this.removeFromFavorites(productId, storageFavorites);
            this.markItemsById(productId);
        } else {
            this.addToFavorites(productId, storageFavorites);
            this.markItemsById(productId);
        }
    }

    markItemsById(productId) {
		// если на странице несколько карточек одного и того же товара
        const filteredById = [...this.productItems].filter(productItem => productItem.dataset.productId == productId);
        filteredById.forEach( item => {
            item.classList.toggle('is-favorite');
        });
    }

    markFavoriteItems() {
		// по загрузке страницы
        const storageFavorites = JSON.parse(localStorage.getItem('favorites'));

        if ( !storageFavorites ) return;
        if ( !storageFavorites.length ) return;
    
        storageFavorites.forEach( id => {
    
            const favoriteItems = [...this.productItems].filter(productItem => productItem.dataset.productId == id);
    
            favoriteItems.forEach( item => {
                item.classList.add('is-favorite');
            });
        });
    }

    addToFavorites(productId, favorites = []) {
        favorites.push(productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    removeFromFavorites(productId, favorites) {
        const newFavorites = favorites.filter( id => id != productId );
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
}