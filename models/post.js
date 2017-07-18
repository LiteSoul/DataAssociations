let mongoose = require("mongoose")
// POST - title, content
let postSchema = new mongoose.Schema({
	title: String,
	content: String
})
// POST MODEL
module.exports = mongoose.model("Post",postSchema)
