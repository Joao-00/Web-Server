// para crear un servidor http
// https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener


const http = require('http');

//request - response
http.createServer((req, res) =>{
    res.write('hola mundo');

    res.end();
})
//puerto
.listen(8080);

console.log('escuchando el puerto', 8080);