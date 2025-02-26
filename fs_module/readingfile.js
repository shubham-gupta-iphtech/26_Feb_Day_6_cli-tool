// asynchronous file operationn
const fs = require('fs');

fs.readFile('sample.txt','utf-8',(err,data)=>
{
    if(err)
    {
        console.log("an error occured while reading a file.");

    }
    else 
    {
        console.log(data);

    }
})

// synchronous file operation

const fs = require('fs');
const data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);




