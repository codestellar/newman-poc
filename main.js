const express = require('express');
const blog = require('./blog');
const app = express();
const port = 3000;

app.get('/api/categories', (req, res) => {
    res.status(200)
    .send(blog.categories);    
});

app.get('/api/posts', (req, res) => {
    res.status(200)
    .send(blog.posts);    
});

app.listen(port, () => console.log(`App listening on port ${port}`));