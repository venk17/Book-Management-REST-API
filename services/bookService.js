const Book = require('../models/bookModel');

let books = [
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
  new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
];

class BookService {
  static getAllBooks() {
    return books;
  }

  static getBookById(id) {
    return books.find(book => book.id === id);
  }

  static createBook(bookData) {
    const newBook = new Book(bookData.title, bookData.author, bookData.publishedYear);
    books.push(newBook);
    return newBook;
  }

  static updateBook(id, bookData) {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) return null;
    
    books[bookIndex] = {
      ...books[bookIndex],
      ...bookData
    };
    
    return books[bookIndex];
  }

  static deleteBook(id) {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) return false;
    
    books.splice(bookIndex, 1);
    return true;
  }

  static importBooks(bookDataArray) {
    const results = {
      addedBooks: [],
      errors: []
    };

    bookDataArray.forEach((bookData, index) => {
      const validationErrors = Book.validate(bookData);
      if (validationErrors.length > 0) {
        results.errors.push(`Row ${index + 1}: ${validationErrors.join(', ')}`);
      } else {
        const newBook = new Book(bookData.title, bookData.author, bookData.publishedYear);
        books.push(newBook);
        results.addedBooks.push(newBook);
      }
    });

    return results;
  }
}

module.exports = BookService;