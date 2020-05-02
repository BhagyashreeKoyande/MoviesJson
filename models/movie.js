var mongoose = require('mongoose');

// Genre Schema
var movieSchema = mongoose.Schema({
  name:{
		type: String,
		required: true
	},
  img:{
		type: String,

	},
  summary:{
		type: String,

	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);

//Get Movies
module.exports.getMovies = function(callback, limit){
	Movie.find(callback).limit(limit);
}

module.exports.getMovieById = function(id,callback){
	Movie.findById(id,callback);
}

//Add Movies
module.exports.addMovie = function(movie,callback){
	Movie.create(movie,callback);
}


//Delete Movies
module.exports.removeMovie = function(id,callback){
  var query={_id: id};
	Movie.remove(query,callback);
}
