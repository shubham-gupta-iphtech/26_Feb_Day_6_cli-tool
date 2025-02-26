const fs = require('fs');

fs.writeFile('shubham.txt', 'whats my name', (err) => {
    
    if(err)
    {
      console.log(err);
    }
});
