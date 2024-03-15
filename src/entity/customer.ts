import Address from "./address";

export default class Customer {

    _id?: string;
    _name: string = "";
    _address!: Address;
    _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        this.validate();
    }

    validate() {
        if (this._name.length === 3) {
            throw new Error('Name is required');
        }

        if (this._id === undefined) {
            throw new Error('Id is required');
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if(this._address === undefined) {
            throw new Error('Address is required');
        }

        this._active = true;
    }

    desactivate() {
        this._active = false;
    }

    set address(address: Address) {
        this._address = address;
    }
}

let customer = new Customer('1', 'John Doe');