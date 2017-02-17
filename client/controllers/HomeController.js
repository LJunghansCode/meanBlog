app.controller('homeController', ['postFactory', '$location', '$scope', '$route', function(postFact, loc, scope, route){    
    scope.path = loc.$$path;
    scope.admin = false;
    if (scope.$$path == "/admin") {
        scope.admin = true;
    } 
    else {
        scope.admin = false;
    }
}]);