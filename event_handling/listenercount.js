const EventEmitter = require("events");

const handle =new EventEmitter();

handle.on("greet",()=>
{
    console.log("event happend");
})

handle.on("greet",()=>
    {
        console.log("event happend twice");
    })
    
handle.emit("greet");

console.log(handle.listenerCount("greet"));