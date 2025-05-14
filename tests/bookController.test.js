const request = require('supertest');
const app = require('../app');
const BookService = require('../services/bookService');

describe('Book Controller', () => {
  beforeEach(() => {
    // Reset books array before each test
    BookService.getAllBooks = jest.fn().mockReturnValue([
      { id: '1', title: 'Test Book 1', author: 'Author 1', publishedYear: 2020 },
      { id: '2', title: 'Test Book 2', author: 'Author 2', publishedYear: 2021 }
    ]);
  });

  describe('GET /books', () => {
    it('should return all books', async () => {
      const res = await request(app).get('/books');
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /books/:id', () => {
    it('should return a book if it exists', async () => {
      BookService.getBookById = jest.fn().mockReturnValue({
        id: '1', title: 'Test Book', author: 'Test Author', publishedYear: 2020
      });
      
      const res = await request(app).get('/books/1');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('title', 'Test Book');
    });

    it('should return 404 if book does not exist', async () => {
      BookService.getBookById = jest.fn().mockReturnValue(null);
      
      const res = await request(app).get('/books/999');
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('POST /books', () => {
    it('should create a new book', async () => {
      const newBook = {
        title: 'New Book',
        author: 'New Author',
        publishedYear: 2023
      };
      
      BookService.createBook = jest.fn().mockReturnValue({
        id: '3', ...newBook
      });
      
      const res = await request(app)
        .post('/books')
        .send(newBook);
      
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.title).toEqual('New Book');
    });

    it('should return 400 for invalid book data', async () => {
      const invalidBook = {
        title: '', // Invalid title
        author: 'Author',
        publishedYear: 'not a number' // Invalid year
      };
      
      const res = await request(app)
        .post('/books')
        .send(invalidBook);
      
      expect(res.statusCode).toEqual(400);
      expect(res.body.errors).toBeDefined();
    });
  });
});