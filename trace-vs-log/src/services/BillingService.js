class BillingService {
    processBilling(order) {
        // console.trace('Processing billing');  // Using console.trace
        return this.createInvoice(order);
    }

    createInvoice(order) {
        // console.log('Creating invoice');  // Using console.log
        return {
            invoiceId: Math.random().toString(36).substr(2, 9),
            orderId: order.orderId,
            userId: order.user.id,
            amount: order.total,
            date: new Date(),
            status: 'paid'
        };
    }
}

module.exports = BillingService;