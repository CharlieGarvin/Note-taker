const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require('./routes/apiRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('./public'));
app.use('/api', apiRoute);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => console.log('running on PORT', PORT));