let mongoose = require("mongoose");
// Using `mongoose.connect`...
const promise = mongoose.connect(
  "mongodb://ref:ref@ds028310.mlab.com:28310/references",
  {
    useMongoClient: true
    /* other options */
  }
);

const Post = require("./models/post");
const User = require("./models/user");

// // create User, is new user + save user
// User.create({
// 	email: "bobby@justbob.com",
// 	name: "Bobby Blob"
// })
// I don't think this is very conventional, best to research on Scotch or official docs to know how
// to handle all this messy mess:
Post.create(
  {
    title: "But family will remain",
    content: "And that's the foundation you can count on"
  },
  function(err, post) {
    User.findOne({ email: "bobby@justbob.com" }, function(err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        foundUser.posts.push(post);
        foundUser.save(function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
);

//find User and find and populate all posts from that user
// User.findOne({email:"bobby@justbob.com"}).populate("posts").exec(function(err,user){
// 	if(err){console.log(err)}
// 	console.log(user)
// })
