const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>HomePage</h1> <a href="/api/products"> Products </a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    });

    res.json(newProducts)
})

//5:48
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        res.send(404).status('Product does not exit')
    }
    console.log(singleProduct);
    res.json(singleProduct)
})

app.listen(5000, () => {
    console.log('Port 5000 is running');
})