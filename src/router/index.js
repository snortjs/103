import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
const staticMiddleware = express.static('public')
app.use('/', staticMiddleware)
app.get('/datum', (req, res) => {
    var moment = require('moment');
    var vrijeme = moment().format('DD/MM/YYYY HH:mm')
    res.json(vrijeme)
})
app.get('/prognoza', (req, res) => {
    var polje = ['sunčano', 'kišovito', 'oblačno']
    const random = polje[Math.floor(Math.random() * polje.length)];
    let a="Danas će biti "+random
    res.json(a)
})
app.listen(port, () => console.log(`Slušam na portu ${port}!`))