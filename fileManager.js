var fs = require('fs');

fs.appendFile('index.html', 
		'<html>' +
			'<head></head>' +
			'<body>' +
				'<h1>Hello World!</h1>' +
			'</body>' +
		'</html>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});