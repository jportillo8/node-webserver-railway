import express from 'express';
import path from 'path';
import hbs from 'hbs';
import dotenv from 'dotenv';

dotenv.config()

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {})

// Servit static files from the React app
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Curso de NodeJS',
        name: 'Lucrecia'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Curso de NodeJS',
        name: 'Lucrecia'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Curso de NodeJS',
        name: 'Lucrecia'
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})