const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    genre:{
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    yearOfRelease: {
        type: Number,
        required: true
    }


});

const Movies = mongoose.model("movie", movieSchema);

module.exports = Movies;