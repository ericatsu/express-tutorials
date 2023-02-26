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

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    const { productID, reviewID } = req.params;
    const product = products.find((product) => product.id === Number(productID));
    if (!product) {
        return res.status(404).send('Product not found');
    }
    const review = product.reviews.find((review) => review.id === Number(reviewID));
    if (!review) {
        return res.status(404).send('Review not found');
    }
    res.json(review);
});

app.listen(5000, () => {
    console.log('Port 5000 is running');
})