const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).end('The Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).end('The About Page')
})

app.all('*', (req, res) => {
    res.status(404).end('<h1>Page Not Found</h1>')
})
app.listen(5000, () => {
    console.log('Server listening on 5000');
})