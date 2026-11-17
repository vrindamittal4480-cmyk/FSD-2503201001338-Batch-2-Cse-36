
const express = require('express');
const app = express();

app.use(express.json());

// GET route
app.get('/users', (req, res) => {
    res.send("GET: Fetch all users");
});

// POST route
app.post('/users', (req, res) => {
    res.send("POST: User created");
});

// PUT route
app.put('/users/:id', (req, res) => {
    res.send("PUT: User updated with ID " + req.params.id);
});

// DELETE route
app.delete('/users/:id', (req, res) => {
    res.send("DELETE: User deleted with ID " + req.params.id);
});

// Start server
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
