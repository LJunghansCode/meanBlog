app.controller('loginController', ['loginFactory', '$location', '$scope','$routeParams', function(loginFact, loc, scope, params){
    scope.loginLuca = function(){
        if(!scope.Luca){
            scope.nope = "nope";
        }
        
        loginFact.loginLuca(scope.Luca.cred, function(data){
            if(data.data.fail){
                scope.nope = "nope";
            }
            else if(data.data.success){
                scope.luca = "luca";
                loc.url('/create');
            }
        });
    };
}]);