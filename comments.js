// Create web server
// 1. Create a web server
// 2. Handle GET /comments request
// 3. Handle POST /comments request
// 4. Handle GET /comments/:id request
// 5. Handle PUT /comments/:id request
// 6. Handle DELETE /comments/:id request

// 1. Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 2. Handle GET /comments request
app.get('/comments', (req, res) => {
    // 2.1. Get comments from database
    const comments = [
        {
            id: 1,
            content: 'Hello World'
        },
        {
            id: 2,
            content: 'Hello Coder'
        },
        {
            id: 3,
            content: 'Hello NodeJS'
        }
    ];

    // 2.2. Send comments to client
    res.status(200).json(comments);
});

// 3. Handle POST /comments request
app.use(bodyParser.json());
app.post('/comments', (req, res) => {
    // 3.1. Get data from client
    const content = req.body.content;

    // 3.2. Insert data to database
    const comment = {
        id: 4,
        content: content
    };

    // 3.3. Send data to client
    res.status(201).json(comment);
});

// 4. Handle GET /comments/:id request
app.get('/comments/:id', (req, res) => {
    // 4.1. Get id from client
    const id = req.params.id;

    // 4.2. Get data from database
    const comment = {
        id: id,
        content: 'Hello World'
    };

    // 4.3. Send data to client
    res.status(200).json(comment);
});

// 5. Handle PUT /comments/:id request
app.put('/comments/:id', (req, res) => {
    // 5.1. Get id from client
    const id = req.params.id;

    // 5.2. Get data from client
    const content = req.body.content;

    // 5.3. Update data to database
    const comment = {
        id: id,
        content: content
    };

    // 5.4. Send data to client
    res.status(200).json(comment);
});

// 6. Handle DELETE /comments/:id request
app.delete('/comments/:id', (req, res) => {
    // 6.1. Get id from client
    const id = req.params.id;

    // 6.2. Delete data from database
    const comment = {
        id: id,
        content: 'Hello World'
    };

    // 6.3. Send data to client
    res.status(200).json(comment);
});

// 1. Create a web server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
