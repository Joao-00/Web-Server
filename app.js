//paquetes utilizado
//https://www.npmjs.com/package/express
//https://expressjs.com/

//https://www.npmjs.com/package/handlebars

require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT;
const hbs = require('hbs');




//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//para servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) =>{
  res.render('home', {
      nombre:'Paulo Joao',
      titulo: 'Curso de node'
  });
});

app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre:'Paulo Joao',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre:'Paulo Joao',
        titulo: 'Curso de node'
    });
});



app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});