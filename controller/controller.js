const Movies = require('../model/genres');

const getMovie = (req, res, next) => {
    Movies.find({})
        .then((movies) => res.send(movies))
        .catch(next);
}

const addMovie = (req, res, next) => {
    Movies.create(req.body)
        .then((newMovie) => res.send(newMovie))
        .catch(next);
}

const updateMovie = (req, res, next) => {
    Movies.findByIdAndUpdate({_id:req.params.id}, req.body)
        .then(() => {
            Movies.findOne({_id:req.params.id})
                .then((movie) => res.send(movie))
            .catch(next)    
        })
}

const deleteMovie = (req, res, next) => {
    Movies.findByIdAndRemove({_id:req.params.id})
        .then((movie) => res.send(movie))
        .catch(next);
}


module.exports = { 
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie
}