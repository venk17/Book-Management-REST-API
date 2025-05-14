const express = require('express');
const multer = require('multer');
const router = express.Router();
const bookController = require('../controllers/bookController');
const importController = require('../controllers/importController');
const validateBook = require('../middleware/validateBook');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Book CRUD routes
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', validateBook, bookController.createBook);
router.put('/:id', validateBook, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

// Bulk import route
router.post('/import', upload.single('books'), importController.importBooks);

module.exports = router;