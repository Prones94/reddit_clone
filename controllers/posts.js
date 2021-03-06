const Post = require('../models/post');

module.exports = app => {

  app.get('/', (req,res) => {
    Post.find({}).lean()
      .then(posts => {
        res.render('posts-index', { posts });
      })
      .catch(err => {
        console.log(err.message);
      })
  })

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);
    console.log('posts', post)

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      console.log('Saved this to the db',post,err)
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

};