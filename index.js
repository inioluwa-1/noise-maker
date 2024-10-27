const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let noiseMakers = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('input');
});


app.get('/display', (req, res) => {
    res.render('display', { noiseMakers });
});


app.post('/add', (req, res) => {
    const { name } = req.body;
    if (name) {
        noiseMakers.push(name);
    }
    res.redirect('/display');
});


app.post('/delete', (req, res) => {
    const { index } = req.body;
    if (index >= 0) {
        noiseMakers.splice(index, 1);
    }
    res.redirect('/display');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
