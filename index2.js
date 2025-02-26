const fs = require('fs');

fs.readFile('shubham.txt','utf-8',(err, data) =>
{
    if(err) 
    {
        throw err;
    }
    console.log(data);
});

fs.writeFile('shubham.txt','whats my name', (err)=>
{
    console.log(err);
});

fs.unlink('shubham.txt',(err)=>

{
    if(err)
    {console.log(err);
    }
})   

const path = require('path');

const filepath = path.join(__dirname,'folder','shubham.txt');
console.log(filepath);

const filepath = path.extname('shubham.txt');
console.log(filepath);

const filepath = path.basename('/user/local/file.txt');
console.log(filepath); // Output: file.txt


const https = require("http");

const server = https.createServer((req,res)=>
{
    res.end('Hello !')
});

server.listen(3000,()=>
{
    console.log(`server listening at port:3000`);
})


const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet',()=>
{
    console.log("heythere");

})

emitter.emit("greet");

