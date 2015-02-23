var _alApac = require('../app/alApac');
var _expect = require('chai').expect;

describe('ActionList APAC', function() {

	it('should define a run() function.', function() {
		_expect(_alApac.run).to.not.be.undefined;
	});
});
