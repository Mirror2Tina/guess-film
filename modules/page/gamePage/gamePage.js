(function(define) {
	define(function(require) {


		var $ = require('jquery'),
			gamePageT = require('gamePageT'),
			filmdata = require('filmdata');

		function gamePage() {

		}


		gamePage.prototype = new pageBase();
		gamePage.prototype.constuctor = gamePage;

		gamePage.prototype.init = function() {
			this.baseInit();

			return this;

		}

		gamePage.prototype.load = function() {
			this.baseLoad();
			return this;

		}


		return gamePage;
	});
})(
	typeof define === 'function' && define.amd ? define : function(factory) {
		module.exports = factory(require);
	}
	// Boilerplate for AMD and Node
);