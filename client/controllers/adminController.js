app.controller('adminController', ['postFactory', '$location', '$scope','$routeParams', function(postFact, loc, scope, params){
  
    if(!scope.luca){
        loc.url('/home');
    }
    scope.loginLuca = function(){
        postFact.loginLuca(scope.Credentials);
    };
    scope.submit = postFact.newBlogPost;
}]);