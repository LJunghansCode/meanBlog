app.factory('loginFactory', ['$http', '$location', function(http, loc){
	var factory = {};
    scope.loginLuca() = function(callback){
        http.post('/loginLuca').then(function(returned_data){
            if(returned_data){
                console.log(returned_data);
            }
        });
    };    

	return factory;
}]);