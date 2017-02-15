app.controller('adminController', ['postFactory', '$location', '$scope', function(postFact, loc, scope){
    console.log('admincontroller');
    scope.submit = postFact.newBlogPost;
    if(!scope.luca){
        loc.url('/home');
    }
}]);