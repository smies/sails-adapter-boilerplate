/**
 * Test dependencies
 */
var Adapter = require('../../');


describe('registerCollection', function () {

<<<<<<< Updated upstream:test/unit/register.js
	it('should not hang or encounter any errors', function (done) {
		Adapter.registerCollection({
=======
	it('should not hang or encounter any errors', function (cb) {
		var adapter = require('../RevisionsAdapter.js');
		adapter.registerCollection({
>>>>>>> Stashed changes:test/register.js
			identity: 'foo'
		}, done);
	});

	// e.g.
	// it('should create a mysql connection pool', function () {})
	// it('should create an HTTP connection pool', function () {})
	// ... and so on.
});