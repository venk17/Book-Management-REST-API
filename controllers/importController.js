const fs = require('fs');
const path = require('path');
const BookService = require('../services/bookService');

exports.importBooks = (req, res) => {
  try {
    if (!req.file) {
      throw new Error('File not provided');
    }

    const filePath = path.join(__dirname, '../uploads', req.file.filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');
    
    // Remove header if exists
    if (lines[0].toLowerCase().includes('title,author,publishedyear')) {
      lines.shift();
    }

    const bookDataArray = lines.map(line => {
      const [title, author, publishedYear] = line.split(',');
      return {
        title: title?.trim(),
        author: author?.trim(),
        publishedYear: publishedYear ? parseInt(publishedYear.trim(), 10) : NaN
      };
    });

    const importResult = BookService.importBooks(bookDataArray);
    
    // Clean up the uploaded file
    fs.unlinkSync(filePath);

    res.json({
      addedBooksCount: importResult.addedBooks.length,
      errorRows: importResult.errors
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};