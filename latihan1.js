// Event     : Latihan 1
// Deskripsi : Membuat server dengan modul http
// Created   : 22 Desember 2020 23:25 wib 
// author    : Oya Suryana
// blog      : https://ozs.web.id    


var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h4>Assalamualaikum wr.wb.</h4>');
}).listen(9000);

console.log('Server berjalan di port 9000');