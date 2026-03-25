var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
    data={
        'subject':'FSD',
        'Topic':'Node'
    }
    res.write(JSON.stringify(data))
    res.end()
}).listen(3120)