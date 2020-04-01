import initHeaderMobile from '../modules/headerMobile';
import initProductItems from "../components/initProductItems";
import Headers from "../../vue/headers";

export default function() {

    initHeaderMobile();
    initProductItems();

    ['#header-panel','#header-mobile-panel'].forEach(selector => {
        new Headers(selector);
    });
}