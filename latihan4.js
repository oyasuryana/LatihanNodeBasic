    // Event     : Latihan 4
    // Deskripsi : Membuat Query String HTTP
    // Created   : 24 Desember 2020 17:00 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id    

    var http = require('http');
    var url = require('url');

    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
    
        var q = url.parse(req.url,true).query;
        var txt = q.tahun +" "+q.bulan;
        res.write(req.url);
        res.write('<br/>')
        res.write(txt);
        res.end();
    }).listen(8000);
    console.log('Server berjalan di port 8000');