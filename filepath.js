const path = require('path');

const filepath = path.join(__dirname, 'folder', 'shubham.txt');
console.log(filepath);

const filepath = path.extname('shubham.txt');
console.log(filepath);

const filepath = path.basename('/user/local/file.txt');
console.log(filepath); // Output: file.txt
