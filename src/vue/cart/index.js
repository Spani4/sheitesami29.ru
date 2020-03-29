import Vue from "vue";

import App from "./App.vue";

const el = document.querySelector('#cart');


export const eventBus = new Vue({

    data: () => {

        return {};
    }
});

Vue.use(eventBus);

export default class Cart {

    constructor() {

        const vmCart = new Vue({

            el,
    
            data: {
                test: 'test',
            },
            
            render: (h) => h(App),
        });
    }
}