const http = require("http");
const { url } = require("inspector");


const hostname="127.0.0.1";
port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url === "/api" && req.method === "GET" ){
        res.statusCode = 200;
        res.setHeader("Content-type","text/plain");
        res.end("Hello world");
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-type","text/plain");
        res.end("error");
    }
});

server.listen(port, hostname, ()=>{
    console.log("Server started.")
});