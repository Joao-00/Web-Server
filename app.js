// para crear un servidor http
// https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener


const http = require('http');


    
    //request - response
http.createServer((req, res) =>{
    

    // res.writheHead(200, {'Content-Type': 'application/JSON'})
    res.writheHead(200, {'Content-Type': 'application/csv'})

    
    res.write('');
    res.write('');
    res.write('');
    res.write('');
    res.write('');
    
    res.end();
})
//puerto
.listen(8080);
    
console.log('escuchando el puerto', 8080);


