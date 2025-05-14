const express = require('express');
const logger = require('./config/logger');
const errorHandler = require('./middleware/errorHandler');
const bookRoutes = require('./routes/bookRoutes');
const { PORT } = require('./config/env');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/books', bookRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;