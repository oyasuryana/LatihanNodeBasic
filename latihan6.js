    // Event     : Latihan 6
    // Deskripsi : URL Modul
    // Created   : 24 Desember 2020 17:00 wib 
    // author    : Oya Suryana
    // blog      : https://ozs.web.id  

    var url = require('url');
    var adr = 'http://localhost:8000/index.html?tahun=2020&bulan=desember';
    var q = url.parse(adr,true);

    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    var queryData= q.query;
    console.log(queryData.bulan); 