app.factory('postFactory', ['$http', '$location', function(http, loc){
	var factory = {};
	factory.newPost = function(post){
		http.post('/newBlog', post).then(function(returned_data){
			if(returned_data){
			loc.url('/home');
			}
		});
	};
    factory.allPosts = function(callback){
		http.get('/allPosts').then(function(returned_data){
            callback(returned_data);
		});
	};
    factory.getOne = function(id, callback){
		http.get('/blog/' + id ).then(function(returned_data){
			callback(returned_data);
		});
	};
	return factory;
}]);