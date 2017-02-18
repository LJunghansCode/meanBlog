app.controller('adminController', ['loginFactory', '$location', '$scope','$routeParams', function(loginFact, loc, scope, params){
    loginFact.getAdmin(function(returned_data){
        if(!returned_data.admin){
            loc.url('/home');
        }
    });
    
}]);