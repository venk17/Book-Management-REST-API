const { v4: uuidv4 } = require('uuid');

class Book {
  constructor(title, author, publishedYear) {
    this.id = uuidv4();
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }

  static validate(bookData) {
    const errors = [];
    
    if (!bookData.title || typeof bookData.title !== 'string') {
      errors.push('Title is required and must be a string');
    }
    
    if (!bookData.author || typeof bookData.author !== 'string') {
      errors.push('Author is required and must be a string');
    }
    
    if (!bookData.publishedYear || isNaN(bookData.publishedYear)) {
      errors.push('Published year is required and must be a number');
    }
    
    return errors;
  }
}

module.exports = Book;