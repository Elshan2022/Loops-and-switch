const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 3, name: 'John', email: 'john@example.com', location: { city: 'Estonia', country: 'Tartu' } },
    { id: 4, name: 'Fred', email: 'fred@example.com', location: { city: 'Germany', country: 'Berlin' } },
    { id: 5, name: 'Luis', email: 'luis@example.com', location: { city: 'Russia', country: 'Moscow' } },


];

const orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Kettle', quantity: 3, price: 900 },
    { orderId: 104, customerId: 4, product: 'Backpack', quantity: 4, price: 300 },
    { orderId: 105, customerId: 5, product: 'Ironer', quantity: 5, price: 1600 },
];


const customersEmail = customers.map((object) => {
    return object.email;
});

console.log(customersEmail);

const priceGreaterThousand = orders.filter((object) => {
    const { price, quantity } = object;
    return (price * quantity) > 1000;
});

console.log(priceGreaterThousand);

console.log("-----------------------");

const specificCustomer = customers.find((object) => {
    return object.name === "Alice"
});

console.log(specificCustomer);

console.log("----------------------");

const specificOrderId = orders.findIndex((object) => {
    return object.orderId === 102;
});

console.log(specificOrderId);

console.log("----------------------");


const isMatchCountry = customers.some((object) => {
    return object.location.country === "USA";
});

console.log(isMatchCountry);

console.log("----------------------");

orders.forEach((orderObj) => {
    let matchedObj = customers.find((cusObj) => orderObj.customerId === cusObj.id);

    const { orderId, quantity, price, product } = orderObj;
    console.log(`Order ${orderId} by ${matchedObj.name}: ${quantity} x ${product} for ${price} each`);
});
