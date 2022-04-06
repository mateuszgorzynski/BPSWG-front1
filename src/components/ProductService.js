
export class ProductService {

    getListSmall() {
        return fetch('data/Data.json').then(res => res.json()).then(d => d.data);
    }

    getList() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

    getListWithOrdersSmall() {
        return fetch('data/Data-orders-small.json').then(res => res.json()).then(d => d.data);
    }
}
    