let mongoose = require("mongoose")
// USER SQUEMA - email, name
let userSchema = new mongoose.Schema({
	email: String,
	name: String,
	// array of posts, taking from the post schema name, which is postSchema from above
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post"
	}]
})
// USER MODEL - it's covention to match the name of the model, with capital first
module.exports = mongoose.model("User",userSchema)