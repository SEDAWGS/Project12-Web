var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.Server(app);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/testLogin', function(req, res) {
	res.render('index.html');
});

app.get('/', function(req, res) {
	res.render('landing.html');
});

var port = process.env.PORT || 5000;

server.listen(port, function() {
	console.log ('Started listening on port: ' + port);
});