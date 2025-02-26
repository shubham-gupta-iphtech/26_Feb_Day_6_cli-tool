const EventEmitter = require("events")
const inst =new EventEmitter();

inst.once('greet',(name)=> 
{
  console.log(`${name}`);
})

inst.removeListener('greet');
inst.removeAllListeners('hello');

inst.emit("greet","shubham");