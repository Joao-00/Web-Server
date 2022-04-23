//paquete utilizado
//https://www.npmjs.com/package/express
//https://expressjs.com/
const express = require('express')
const app = express()
const port = 8082;

//para servir contenido estatico
app.use(express.static('public'));



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', function (req, res) {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//app.listen(8082)