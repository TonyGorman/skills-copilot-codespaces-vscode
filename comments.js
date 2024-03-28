// Create web server

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// add a health check endpoint to the server
app.get('/health', (req, res) => {
    res.send('Server is healthy');
});














