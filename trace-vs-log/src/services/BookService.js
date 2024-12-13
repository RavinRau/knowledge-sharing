const Book = require('../models/Book');

class BookService {
    constructor() {
        this.books = new Map();
        this.initializeBooks();
    }

    initializeBooks() {
        const books = [
            new Book('book1', 'The Great Gatsby', 'F. Scott Fitzgerald', 15.99, 5),
            new Book('book2', '1984', 'George Orwell', 12.99, 3),
            new Book('book3', 'To Kill a Mockingbird', 'Harper Lee', 14.99, 7)
        ];

        books.forEach(book => this.books.set(book.id, book));
    }

    getBook(bookId) {
        // console.trace('Getting book details');  // Using console.trace
        return this.books.get(bookId);
    }

    checkBookAvailability(bookId, quantity) {
        const book = this.getBook(bookId);
        return book && book.stock >= quantity;
    }
}

module.exports = BookService;