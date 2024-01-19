const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request server');
    res.end('hlo world')
})

server.listen(1000, () => {
    console.log('server listening the request');
})
