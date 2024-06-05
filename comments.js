// Create web server
// Run: node comments.js
// Test: curl -X POST http://localhost:3000/comments -d 'message=hello'
// Test: curl http://localhost:3000/comments

'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { message } = req.body;
  comments.push({ message });
  res.json({ message });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});