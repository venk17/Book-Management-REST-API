function errorHandler(err, req, res, next) {
  console.error(err.stack);
  
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  
  if (err.message === 'File not provided') {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.status(500).json({ error: 'Something went wrong!' });
}

module.exports = errorHandler;