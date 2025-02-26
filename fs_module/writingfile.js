const fs= require('fs');

//Asynchronous way

fs.writeFile('sample.txt',"changing the content", (err)=>
{
    if(err)
    {
        console.log(err);
    }else 
    {
        console.log("file written successfully");
    }
 });

//Synchronous way

fs.writeFileSync('sample.text','what do u mean');
