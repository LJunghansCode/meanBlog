app.controller('blogPostController', ['$scope', 'Upload', '$timeout', '$routeParams', 'postFactory', function(scope, Upload, timeout, routeParams, postFact){
    scope.newBlogPost = function()
    {
      postFact.newPost(scope.blogPost);
    };

    var allPosts = function(){
        postFact.allPosts(function(data){
        scope.allPosts = data.data;
      });
    };
        	if(routeParams.id){
	    	postFact.getOne(routeParams.id, function(data){
			  scope.blogInstance = data.data;
		});
	}
   allPosts(); 
}]);




//OLD PIC CODE
    // scope.uploadPic = function(file) {
    // file.upload = Upload.upload({
    //   url: '/newImage',
    //   method: 'POST',
    //   data: {file: file},
    // });

    // file.upload.then(function (response) {
    //   timeout(function () {
    //     file.result = response.data;
    //   });
    // }, function (response) {
    //   if (response.status > 0)
    //     scope.errorMsg = response.status + ': ' + response.data;
    // }, function (evt) {
    //   // Math.min is to fix IE which reports 200% sometimes
    //   file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    // });
    // }



