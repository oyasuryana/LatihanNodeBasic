    // Event     : Latihan Membuat Web Statis
    // Deskripsi : Membuat Web Statis
    // Created   : 24 Desember 2020 23:33 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id    


    var http = require('http');
    var url = require('url');
    var fs = require('fs');

    http.createServer(function(req,res){
        var q= url.parse(req.url,true);
        var namaFile= q.pathname;
        if(namaFile=='/'){
            filenya='index.html';
        } else {
            filenya=namaFile.replace('/','');
        }
        fs.readFile(filenya,function(err,data){
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                return res.end('Error 404 : Halaman tidak ditemukan');
            }

            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            return  res.end(); 
        })    ;

    }).listen(8001);
    console.log('Server berjalan di port 8001');