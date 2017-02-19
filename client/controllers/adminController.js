app.controller('adminController', ['loginFactory','postFactory', '$location', '$scope','$routeParams', function(loginFact, postFact, loc, scope, params){
    loginFact.getAdmin(function(returned_data){
        if(!returned_data.admin){
            loc.url('/home');
        }
    });
    scope.newBlogPost=function(){
        postFact.newPost(scope.blogPost);
    };

    
}]);