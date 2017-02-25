var blogPostController = require('./../controllers/postController.js');
var adminController = require('./../controllers/adminController.js');

module.exports = function(app){
    app.post('/newBlog', function(req, res){
        if(!req.session.admin){
            res.json({fail:"true"});
        }else{
            blogPostController.newBlog(req, res);
        }
    });
    app.get('/allPosts', function(req, res){
        blogPostController.allPosts(req, res);
    });
    app.get('/blog/:id', function(req, res){
        blogPostController.onePost(req, res);
    });
    app.post('/login', function(req, res){
        adminController.loginLuca(req, res);
    });
    app.get('/getAdmin', function(req,res){
        adminController.getadmin(req, res);
    });
};