const express = require('express');

const { findTodoWithId } = require('./helper/functions');
const todoDb = require('./db/todoDb');
const app = express();

app.get('/api/todos', (req, res) => {
  res.json(todoDb);
});

app.get('/api/todos/:id', (req, res) => {
  const found = findTodoWithId(req.params.id);
  console.log(found);
  res.json({ rez: found });
});

app.listen(3000, () => console.log('server os running'));
