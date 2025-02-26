const EventEmitter = require("events");

// const inst =new EventEmitter();

// inst.on('greet',(name)=> 
// {
//   console.log(`${name}`);
// })

// inst.emit("greet","shubham");

const inst =new EventEmitter();

inst.once('greet',(name)=> 
{
  console.log(`${name}`);
})

inst.emit("greet","shubham");
inst.emit("greet","shubham");