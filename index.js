console.log('Hello, World!');

const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Żądanie GET otrzymane dla strony głównej',  req.query);
  res.send('Hello, World!');
}); 

app.post('/', (req, res) => {
    console.log('Żądanie POST otrzymane dla strony głównej', req);
  res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`aplikacja pracuja na porcie http://localhost:${PORT}`);
});