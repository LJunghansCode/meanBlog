var blogPostController = require('./../controllers/postController.js');

module.exports = function(app){
    app.post('/newBlog', function(req, res){
        blogPostController.newBlog(req, res);
    });
    app.get('/allPosts', function(req, res){
        blogPostController.allPosts(req, res);
    });
    app.get('/blog/:id', function(req, res){
        blogPostController.onePost(req, res);
    });
};