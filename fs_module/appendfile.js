const fs = require("fs");

// fs.appendFile('appendfile.txt','\n offended text',(err)=> 
// {   if(err)
// {
//     throw err;
// }
//     console.log("the text is appended");
// })

fs.appendFileSync('appendfile.txt',"\n welcome to the user");
