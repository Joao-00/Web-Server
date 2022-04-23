// para crear un servidor http
// https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener

const http = require('http');


    
    //request - response
http.createServer((req, res) =>{
    

    // res.writeHead(200, {'Content-Type': 'application/JSON'})
    //res.setHeander('Content-Disposition', 'attachment; filename=lista.csv')
    //el content type puede ser de distintas formas, pdf, text, csv (o excel) etc...
    // res.writeHead(200, {'Content-Type': 'application/csv'})
    // console.log(req);
    res.writeHead(200, {'Content-Type': 'application/JSON'})

    const persona = {
        id:1,
        nombre: 'joao'
    }


    res.write(JSON.stringify(persona));
    
    res.end();
})
//puerto
.listen(3001);
    
console.log('escuchando el puerto', 3001);


