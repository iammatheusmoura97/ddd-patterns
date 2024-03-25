import Customer from './customer';
import Address from "./address";

describe('customer unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let customer = new Customer('', 'John Doe')
        }).toThrowError('Id is required');
    });

    it('should throw erro when name is empty', () => {
        expect(() => {
            let customer = new Customer('123', '')
        }).toThrowError('Name is required');
    });

    it('should change name', () => {
        // Arrange
        const customer = new Customer('123', 'John');

        // Act
        customer.changeName('Jane');

        // Assert
        expect(customer.name).toBe('Jane');
    });

    it('should activate customer', () => {
        const customer = new Customer('1', 'Customer 1');
        const address = new Address('Street 1', 'city 1', '123', '13330-250');
        customer.address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it('should throw error when address is undefined when you activate a customer', () => {
        expect(() => {
            const customer = new Customer('1', 'Customer 1');
            customer.activate();
        }).toThrowError('Address is mandatory to activate a customer');
    });

    it('should deactivate customer', () => {
        const customer = new Customer('1', 'Customer 1');

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });
});