
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	name : {type: String, required: true ,maxlength: 100, minlength: 3}
});


// Virtual for gendre
GenreSchema
.virtual('url')
.get(function() {
	return '/catlog/gendre/' + this._id;
});


//Export model
module.exports = mongoose.model('Genre', GenreSchema);