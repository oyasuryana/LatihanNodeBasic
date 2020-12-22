    // Event     : Latihan 2
    // Deskripsi : Membuat dan menggunakan modul sendiri
    // Created   : 22 Desember 2020 23:33 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id    

var http = require('http');
var tglSekarang = require('./modulku');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Sekarang menunjukan tanggal : ' + tglSekarang.tanggalKu());
    res.end();
}).listen(9000);

console.log('Server berjalan di port 9000');

