const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', require('./routes'));


const port = process.env.PORT || 8080;



app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})