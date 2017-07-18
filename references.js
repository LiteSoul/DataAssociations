let mongoose = require("mongoose")
mongoose.connect("mongodb://embed:embed@ds028310.mlab.com:28310/embed")

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});

// POST - title, content
let postSchema = new mongoose.Schema({
	title: String,
	content: String
})
// POST MODEL
let Post = mongoose.model("Post",postSchema)

// USER SQUEMA - email, name
let userSchema = new mongoose.Schema({
	email: String,
	name: String,
	// array of posts, taking from the post schema name, which is postSchema from above
	posts: [postSchema]
})
// USER MODEL - it's covention to match the name of the model, with capital first
let User = mongoose.model("User",userSchema)

 // testing a user
let newUser = new User({
	email: "email@emailer.io",
	name: "Ema Il"
})
newUser.save((err,user) => {
	if(err){console.log(err)}else{console.log(user)}
})
// testing a post
let newPost = new Post({
	title: "First and last post",
	content: "The content is irrelevant, except: Be brave, be bold, be the best version of yourself..."
})
newPost.save((err,post) => {
	if(err){console.log(err)}else{console.log(post)}
})
//testing another user with a post
let fullUser = new User({
	email: "correo@argentino.ar",
	name: "Correo Argento",
})
fullUser.posts.push({
	title: "Cartas invisibles",
	content: "Where did them letters go?! They are on the intertubes!"
})
fullUser.save((err,full) => {
	if(err){console.log(err)}else{console.log(full)}
}) 


// Retrieve one user, add a post and save
User.findOne({name: "Correo Argento"},(err,user) => {
	if(err){console.log(err)}
	else{
		user.posts.push({
			title: "Get on the future train!",
			content: "The future is here, and is all encompasing, it's the only way"
		})
		user.save((err,user) => {
			if(err){console.log(err)}else{console.log(user)}
		})
	}
})