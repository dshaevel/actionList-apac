var _alApac = require('./app/alApac'),
	_bodyParser = require('body-parser'),
	_express = require('express'),
	_util = require('util');

var app = _express();
app.use(_bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.send({
		name: 'actionList-apac'
	});
});

app.post('/doStuff', function(req, res) {
	_alApac.run();

	res.send({
		description: 'called alApac.run()'
	});
});

app.listen(3000);


