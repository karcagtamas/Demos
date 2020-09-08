const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');


// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Runs before every call
const logger = require('./middleware/logger');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get('/', (req, res) => res.render('index', { title: 'Member App', members }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(logger);

app.use('/api/members', require('./routes/api/members'))

/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
