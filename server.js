const https = require("http");

const server = https.createServer((req, res) => {
    res.end('Hello !')
});

server.listen(3000, () => {
    console.log(`server listening at port:3000`);
})