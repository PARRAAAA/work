// app.js

const express = require('express');
const app = express();
const port = 3000; // 
const path = require('path');


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

const randomUsers = [
  { name: 'carlos', email: 'chonchillos10@gmail.com' },
  { name: 'parra', email: 'parraaa0901@gmail.com' },
 
];


app.get('/browse', (req, res) => {
  res.render('index', { users: randomUsers });
});


app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
