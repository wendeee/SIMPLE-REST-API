const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const port = process.env.PORT || 8080;

const genres = [
    {
        category: "Action",
        title: "Rambo-Last Blood",
        yearOfRelease: 2019
    },
    {
        category: "Sci-Fi",
        title: "Venom",
        yearOfRelease: 2018  
    },
    {
        category: "Documentary",
        title: "The Banker",
        yearOfRelease: 2019
    },
    {
        category: "Epic",
        title: "Gladiator",
        yearOfRelease: 2000
    },
    {
        category: "Adventure",
        title: "Jumanji",
        yearOfRelease: 2017
    }
]

// READ Request Handler

app.get('/', (req, res) => {
    res.send("A simple REST API");
})

app.get('/api/genres', (req, res) => {
    res.json({genres});
})

app.get('/api/genres/:category', (req, res) => {
    const genre = genres.find(genre => genre.category===(req.params.category));
    if(!genre){
        res.status(404).send("Genre not found");
    }
    res.send(genre);

})


// CREATE Request Handler

app.post('/api/addMovie', (req, res) => {
    if(!req.body.category || !req.body.title || !req.body.yearOfRelease){
        res.status(400).json("Enter body parameters.");
        return;
    }
   const { category, title, yearOfRelease } = req.body;
   const newMovie = {
       category: category,
       title: title,
       yearOfRelease: yearOfRelease
   }
   genres.push(newMovie);
   res.send(genres);
})



// UPDATE Request Handler - to update a movie title
app.put('/api/genres/:category', (req, res) => {
    const genre = genres.find(genre => genre.category===(req.params.category));
    if(!genre){
        res.status(404).send("Genre not found");
        return;
    }
    if(!req.body.title){
        res.status(400).json("Invalid body parameters.");
        return;
    }
    genre.title = req.body.title;
    res.json({genre});
})

// DELETE Request Handler
app.delete('/api/genres/:category', (req, res) => {
    const genre = genres.find(genre => genre.category===(req.params.category));
    if(!genre){
        res.status(404).send("Genre not found");
        return;
    }
    let index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.json({genre});

})


app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})