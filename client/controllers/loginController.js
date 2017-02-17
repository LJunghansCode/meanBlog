app.controller('loginController', ['postFactory', '$location', '$scope','$routeParams', function(postFact, loc, scope, params){

    scope.loginLuca = function(){
        loginFact.loginLuca(scope.Credentials);
    };
    scope.submit = postFact.newBlogPost;
}]);