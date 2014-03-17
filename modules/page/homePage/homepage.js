(function(define) {
	define(function(require) {
		console.log("homepage");

		var basePage=require(basePage),
		homepageT = require('homepageT');
	     var homepage=	new basePage();
		function homepage () {

		};

	});
})(
	typeof define === 'function' && define.amd ? define : function(factory) {
		module.exports = factory(require);
	}
	// Boilerplate for AMD and Node
);