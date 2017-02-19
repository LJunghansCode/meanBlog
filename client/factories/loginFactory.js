app.factory('loginFactory', ['$http', '$location', function(http, loc){
	var factory = {};
        factory.loginLuca = function(luca, callback){
        http.post('/login', {luca: luca}).then(function(returned_data){
			callback(returned_data);
		});
	};
            factory.getAdmin = function(callback){
            http.get('/getAdmin').then(function(output){
            callback(output.data);
        });
    };
	return factory;
}]);