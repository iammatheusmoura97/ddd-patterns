import Customer from "./entity/customer";
import Address from "./entity/address";
import OrderItem from "./entity/orderItem";
import Order from "./entity/order";

// Agregado por ID
let customer = new Customer('123', 'John Doe');
const address = new Address('Main St', 'Springfield', '123', '12345');
customer.address = address;
customer.activate();


// relacao de agregado por entidade (objeto)
const item1 = new OrderItem('1', 'Item 1', 100);
const item2 = new OrderItem('2', 'Item 2', 200);
const order = new Order('1', '123', [item1, item2]);

