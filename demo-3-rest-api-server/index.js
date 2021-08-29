const http = require("http");
const Person = require("./person");

const hostname="127.0.0.1";
const port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url === "/api" && req.method === "GET"){
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        const person1 = new Person("Saman", 36);
        res.end(JSON.stringify(person1));
    }
    else if(req.url === "/info" && req.method === "GET"){
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        const person2 = new Person("Nimal", 25);
        res.end(person2.greetings());
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-type", "application/json");
        res.end("error");
    }
});

server.listen(port, hostname, ()=>{
    console.log("Server started.")
})