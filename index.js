var _alApac = require('./app/alApac'),
	_bodyParser = require('body-parser'),
	_express = require('express'),
	_util = require('util');

var app = _express();
var jsonParser = _bodyParser.json();

app.get('/', function(req, res) {
	res.send({
		name: 'actionList-apac'
	});
});

app.post('/doStuff', jsonParser, function(req, res) {
	var keywords = req.body.keywords;

	_alApac.run(keywords);

	res.send({
		keywords: keywords
	});
});

app.listen(3000);


