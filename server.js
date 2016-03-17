var express = require('express');
var middleware = require('./middleware.js');

var app = express();
var PORT = 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireMoreAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function() {
	console.log('Server started at port ' + PORT);
});
