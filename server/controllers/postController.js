var mongoose = require('mongoose');
var blogPost = mongoose.model('blogPost');
var multiparty = require('multiparty'),
            fs = require('fs');

module.exports = (function(){
    return{
        newBlog : function(req, res){
			var postInstance = new blogPost(req.body);
			postInstance.save(function(err){
				if(err){
					console.log(err);
				}else{
                    res.json({success: true});
				}
			});
		},
        allPosts : function(req, res){
            blogPost.find(function(err, posts){
                if(err){
                    console.log(err);
                }else{
                    res.json(posts);
                }
            });
        },
        onePost : function(req, res){
            blogPost.findOne({_id : req.params.id}, function(err, post){
                if(err){
                }else{
                    res.json(post);
                }
            });
        }








    };

})();
        //OLD IMAGE CODE SAVING
    //     new_image : function(req, res){
    //         var form = new multiparty.Form();
    //             form.parse(req, function(err, fields, files) {
    //                 var file = files.file[0];
    //                 var contentType = file.headers['content-type'];
    //                 var tmpPath = file.path;
    //                 var extIndex = tmpPath.lastIndexOf('.');
    //                 var extension = (extIndex < 0) ? '' : tmpPath.substr(extIndex)
    //                 var fileName =  files.file[0].originalFilename;
    //                 var destPath = 'client/static/img/' + fileName;
    //                 var blog;

    //                 if (contentType !== 'image/png' && contentType !== 'image/jpeg') {
    //                     fs.unlink(tmpPath);
    //                     return res.status(400).send('Unsupported file type.');
    //                 }

    //                 fs.rename(tmpPath, destPath, function(err) {
    //                     if (err) {
    //                         return res.status(400).send('Image is not saved:');
    //                     }
    //                     return res.json(destPath);
    //     });
    // });

    //     }