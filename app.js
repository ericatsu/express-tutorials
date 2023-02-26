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

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        res.send(404).status('Product does not exit')
    }
    console.log(singleProduct);
    res.json(singleProduct)
})

app.get('/api/products/;productID/reviews/;reviewID', (req, res) => {
    const {reviewID} = req.params;
    const productReview = products.find((review) => review.id === Number(reviewID))
    console.log(req.params);
    
    res.send(productReview)
})

app.listen(5000, () => {
    console.log('Port 5000 is running');
})