var fs= require("fs");
var http = require('http')
http.createServer(function(req,res){
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end("<h1>Hello</h1><img src='images.png'/>")
    }
    else if(req.url==="/images.png"){
        res.writeHead(200,{'Content-Type':'image/png'})
        img=fs.readFileSync("images.png")
        res.end(img)
    }
}
).listen(3300)