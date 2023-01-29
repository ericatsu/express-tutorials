const express = require('express')
const app = express();


app.get('/', (req, res) => {
  res.end('Home Page')
})

app.all('*', (req, res) => {
   res.status(404).send('Error page')
})

app.listen(5000, () => {
    console.log("Listening on port 5000...");
})