var tree = require('tree-directory');

tree(_dirname + '/','**/*').then(function(res){
	console.log(res);
});