const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Żądanie: ', req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    console.log('Żądanie GET dla strony głównej ', req.query);
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    console.log('Żądanie POST dla strony głównej ', req.body);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Aplikacja pracuje pod adresem http://localhost:${port}`);
});