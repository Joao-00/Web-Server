//paquetes utilizado
//https://www.npmjs.com/package/express
//https://expressjs.com/

//https://www.npmjs.com/package/handlebars

const express = require('express')
const app = express()
const port = 8082;

//TODO: require('hbs')
app.set('view engine', 'hbs');

//para servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) =>{
  res.render('home');
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
});
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
});



app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});