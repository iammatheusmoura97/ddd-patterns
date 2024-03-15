import OrderItem from "./orderItem";

export default class Order {

    _id: string;
    _idCustomer: string;
    _items: OrderItem[];

    constructor(id: string, idCustomer: string, items: OrderItem[]) {
        this._id = id;
        this._idCustomer = idCustomer;
        this._items = items;
    }
}