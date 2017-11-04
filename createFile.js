var fs = require('fs');

fs.writeFile('nodeRocks.html','<h1>Node.js Rocks!</h1>', function(err){
	if (err) throw err;
	console.log('File created!');
});