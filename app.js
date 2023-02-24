const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>HomePage</h1> <a href="./api/products"> Products </a>')
})

app.listen(5000, () => {
    console.log('Port 5000 is running');
})