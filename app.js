const fs = require('fs');

// fs.mkdir('newdir',(err) => 
// {
//     console.log("new directory created");
// })

fs.rmdir('newdir',(err) => {
    if(err)
    {
        throw err;
    }
    console.log("directory deleted");
})