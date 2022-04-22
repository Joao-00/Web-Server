// para crear un servidor http
// https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener


const http = require('http');


    
    //request - response
http.createServer((req, res) =>{
    

    // res.writheHead(200, {'Content-Type': 'application/JSON'})
    res.setHeander('Content-Disposition', 'attachment; filename=lista.csv')
    res.writheHead(200, {'Content-Type': 'application/csv'})

    
    res.write('id , nombre\n');
    res.write('1, fernando\n');
    res.write('2, maria\n');
    res.write('3, juan\n');
    res.write('4, pedro\n');
    
    res.end();
})
//puerto
.listen(8080);
    
console.log('escuchando el puerto', 8080);


