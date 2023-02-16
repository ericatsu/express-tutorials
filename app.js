const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([{name: 'Eric'}, {name: 'Atsu'}])
})

app.listen(5000, () => {
    console.log('Port 5000 is running');
})