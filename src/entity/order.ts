import OrderItem from "./orderItem";

export default class Order {

    private _id: string;
    private _idCustomer: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, idCustomer: string, items: OrderItem[]) {
        this._id = id;
        this._idCustomer = idCustomer;
        this._items = items;

        this.validate();

        this._total = this.total();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }

        if (this._idCustomer.length === 0) {
            throw new Error('IdCustomer is required');
        }

        if (this._items.length === 0) {
            throw new Error('Items are required');
        }
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}