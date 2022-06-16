const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const env = require('./env');

const app = express();
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', __dirname+'/pages');

app.get('/tv', (req, res) => {
    res.render('tv');
});

app.listen(env.server.port, () => {
    console.log({ server: 'Server online' });
});