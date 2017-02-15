app.controller('adminController', ['postFactory', '$location', '$scope', function(postFact, loc, scope){
    if(!scope.luca){
        loc.url('/home');
    }
    scope.submit = postFact.newBlogPost;
}]);