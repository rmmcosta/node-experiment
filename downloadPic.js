var fs = require('fs');
var https = require('https');

var pngUrl = 'https://raw.githubusercontent.com/rmmcosta/WebDevJobCourse/master/iscp_icon_agile_business_process.png';
var pngFile = fs.createWriteStream('Pic.png');

var request = https.get(pngUrl, function(res){
	res.pipe(pngFile);
});

console.log(request);