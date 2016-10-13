var tree = require('tree-directory');

tree(__dirname + '/','**').then(function(res){
	console.log(res);
});