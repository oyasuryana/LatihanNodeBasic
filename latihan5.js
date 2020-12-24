    // Event     : Latihan 5
    // Deskripsi : File System
    // Created   : 24 Desember 2020 17:00 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id    

    var http=require('http');
    var fs=require('fs');

    http.createServer(function(req,res){
        fs.readFile('demoFS1.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end(); 
        });
    }).listen(8000);

    console.log('Server berjalan di port 8000');