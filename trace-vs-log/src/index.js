const UserService = require('./services/UserService');
const BookService = require('./services/BookService');
const OrderService = require('./services/OrderService');
const BillingService = require('./services/BillingService');

// Initialize services
const userService = new UserService();
const bookService = new BookService();
const billingService = new BillingService();
const orderService = new OrderService(userService, bookService, billingService);

// Create a user
const user = userService.createUser({
    id: '123',
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St'
});

// Create an order
const orderItems = [
    { bookId: 'book1', quantity: 2 },
    { bookId: 'book2', quantity: 1 }
];

try {
    const order = orderService.createOrder(user.id, orderItems);
    // console.log('Final order:', order);
} catch (error) {
    // console.error('Error creating order:', error.message);
}