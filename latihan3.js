    // Event     : Latihan 3
    // Deskripsi : Membuat Built in Web Server
    // Created   : 24 Desember 2020 17:00 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id    

    var http = require('http');

    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Selamat Datang</h1>');
        res.end();
    }).listen(8000);

    console.log('Server berjalan di port 8000');