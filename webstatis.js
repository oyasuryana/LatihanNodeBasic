    // Event     : Latihan Membuat Web Statis
    // Deskripsi : Membuat Web Statis
    // Created   : 24 Desember 2020 23:33 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id    


    var http = require('http');
    var url = require('url');
    var fs = require('fs');

    http.createServer(function(req,res){
        
        fs.readFile('demoFS1.html',function(err,data){
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            res.end(); 
        })    

    }).listen(8001);

    console.log('Server berjalan di port 8001');