const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');


const dbURI = "mongodb+srv://moviecollection:12345@wd-95.qlbto.mongodb.net/MovieCollection?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true})
    .then((result) => app.listen(port, () => {
        console.log(`Running on port: ${port} and database is connected`)
    }))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use((err, req, res, next)=> res.status(400).send({error: err.message}))


const port = process.env.PORT || 8080;



