const Book = require('../models/bookModel');

function validateBook(req, res, next) {
  const { title, author, publishedYear } = req.body;
  const validationErrors = Book.validate({ title, author, publishedYear });
  
  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }
  
  next();
}

module.exports = validateBook;