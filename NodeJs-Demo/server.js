const Person = require('./person');

const p = new Person('John Doe', 10);

p.greeting();

// Directory and file name
//console.log(__dirname, __filename);

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log(`Called Listener:`, data));

logger.log('Hello World');
logger.log('Hello');
logger.log(' World');
logger.log('Hellosdfsdf World');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  /*  console.log(req.url);
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/api/users') {
    const users = [
      { name: 'Bob', age: 40 },
      { name: 'Tim', age: 20 },
      { name: 'Adam', age: 10 },
      { name: 'Kim', age: 50 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } */

  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );
  console.log(filePath);
  // Extension
  let extName = path.extname(filePath);

  // Initial content
  let contentType = 'text/html';

  // Check ext and set content type
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        res.writeHead(500);
        res.end('Server error: ' + err.code);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
