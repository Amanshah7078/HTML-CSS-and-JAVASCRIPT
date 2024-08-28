const express = require('express');
const path = require('path');
const app = express();
const port = 70;

// For serving static files
app.use(express.static(path.join(__dirname, 'static')));

// Set the template engine as pug and views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

console.log('Views directory:', app.get('views'));

// Endpoints
app.get('/', (req, res) => {
    const con = "Best content ever seen in the HA game";
    const params = {
        'title': 'Hitman Absolution is the best game I have ever played in the graphics way',
        'content': con
    };
    res.status(200).render('index.pug', params);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
