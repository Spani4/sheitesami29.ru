import initHeaderMobile from '../modules/headerMobile';
import initProductItems from "../components/initProductItems";
import Headers from "../../vue/headers";
import initSearch from "../components/initSearch";

export default function() {

    ['#header-cart-counter', '#header-mobile-cart-counter'].forEach(selector => {
        new Headers(selector);
    });
    
    initSearch();
    initHeaderMobile();
    initProductItems();

}