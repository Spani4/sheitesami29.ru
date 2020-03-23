export class ApiCart {
    
    constructor() {}

    static get self() {
        return '/api/cart';
    }
    
    static get items() {
        return '/api/cart/items';
    }
}

export class Order {
    
    constructor() {}

    static get self() {
        return '/api/order';
    }
    
}