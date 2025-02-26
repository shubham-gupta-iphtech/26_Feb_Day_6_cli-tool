const { error } = require("console");
const fs = require("fs");
const { console } = require("inspector");

// fs.readFile("sample.txt","utf-8",(err,data)=>
// {
//     if(err) throw err;
//     console.log(data);

// })

// const data = fs.readFileSync("sample.txt","utf-8");
// console.log(data);

// fs.writeFile("sample.txt","what u want to write",(err)=>
// {  
//     console.log("file written sucessfullly");
// })

//  fs.writeFileSync("sample.txt","i have written code")

// fs.appendFile("sample.txt","\n appended text",(err)=>{
//     if(err)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log("data appended success");
//     }
// })

// fs.appendFileSync("sample.txt","\n fourth appended text");

// fs.unlink("fs.js",(err)=>
// {
//     console.log("file deleted successful");
    
// })

// const emitter = require("events");

// const handle = new emitter();
// handle.on("click",()=>
// {
//   console.log("welcome u ");
// });

// handle.emit("click");


// const emitter = require("events");
// const handle = new emitter();

// handle.once("greet",()=> 
// {
//     console.log("yess");
// })

// handle.emit("greet");

// const emitter = require("events");
// const handle = new emitter();

// handle.on("greet",()=> 
// {
//     console.log("yess");
// })


// console.log(handle.listenerCount("greet"));

//creating a server 

// const http = require("http");
// const server = http.createServer((req,res)=>
// {
//     res.end("server working");

// })

// server.listen(3000,()=> {
//     console.log("hello sirrr");

// })

// fs.rmdir("hellodir",()=> 
// {
//     console.log("directory deleted");
// });

