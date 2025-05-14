const BookService = require('../services/bookService');

exports.getAllBooks = (req, res) => {
  try {
    const books = BookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = (req, res) => {
  try {
    const book = BookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBook = (req, res) => {
  try {
    const newBook = BookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = (req, res) => {
  try {
    const updatedBook = BookService.updateBook(req.params.id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = (req, res) => {
  try {
    const isDeleted = BookService.deleteBook(req.params.id);
    if (!isDeleted) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};