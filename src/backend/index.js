const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; 

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data
let todos = [];

// GET endpoint
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST endpoint
app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, ...req.body };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


// Start the server
app.listen(port, () => console.log(`API running on http://localhost:${port}`));






// PUT endpoint: Update a todo
// app.put('/todos/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const updatedTodo = req.body;
//     todos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
//     res.json(updatedTodo);
// });

// // DELETE endpoint: Delete a todo
// app.delete('/todos/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     todos = todos.filter(todo => todo.id !== id);
//     res.status(204).send();
// });


