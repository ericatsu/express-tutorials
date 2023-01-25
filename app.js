const http = require('http')

const server = http.createServer((req, res) => {
    console.log('user opens a server');
    res.end('The Home Page')
})

server.listen(5000)