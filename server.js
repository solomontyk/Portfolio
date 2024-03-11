const express = require('express');
const app = express();
const port = 3000; // You can change this port number if needed

// Define a route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
