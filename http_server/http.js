const http = require("http");


const server = http.createServer((req,res)=> 
{
    res.end("server connected");
})

server.listen(3000,()=> 
{
    console.log("server listening on port 3000");
});