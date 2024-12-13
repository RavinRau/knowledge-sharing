class OrderService {
    constructor(userService, bookService, billingService) {
        this.userService = userService;
        this.bookService = bookService;
        this.billingService = billingService;
    }

    createOrder(userId, items) {
        // console.trace('Creating order');  // Using console.trace
        
        const user = this.userService.getUser(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Verify all books are available
        for (const item of items) {
            if (!this.bookService.checkBookAvailability(item.bookId, item.quantity)) {
                throw new Error(`Book ${item.bookId} not available in requested quantity`);
            }
        }

        const order = {
            orderId: Math.random().toString(36).substr(2, 9),
            user: user,
            items: items,
            total: this.calculateTotal(items),
            status: 'pending'
        };

        // Process billing
        this.billingService.processBilling(order);

        return order;
    }

    calculateTotal(items) {
        console.log('Calculating total for items:', items);  // Traditional approach
        
        const total = items.reduce((total, item) => {
            const book = this.bookService.getBook(item.bookId);
            console.trace('Book price calculation');  // Using console.trace
            return total + (book.price * item.quantity);
        }, 0);
        
        return total;
    }
}

module.exports = OrderService;