export default class Address {

    street: string;
    city: string;
    number: string;
    zip: string;

    constructor(street: string, city: string, number: string, zip: string) {
        this.street = street;
        this.city = city;
        this.number = number;
        this.zip = zip;

        this.validate();
    }

    validate() {
        if (this.street.length === 0) {
            throw new Error('Street is required');
        }

        if (this.city.length === 0) {
            throw new Error('City is required');
        }

        if (this.number.length === 0) {
            throw new Error('Number is required');
        }

        if (this.zip.length === 0) {
            throw new Error('Zip is required');
        }
    }

    toString() {
        return `${this.street} ${this.number}, ${this.city}, ${this.zip}`;
    }
}