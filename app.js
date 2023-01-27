const { readFileSync } = require('fs');
const http = require('http');


//Reading all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if(url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(5000)