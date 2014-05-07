(function(define) {
	define(function(require) {
		console.log("homePage");

		var basePage = require('basePage'),
			$ = require('jquery'),
			homepageT = require('homePageT');

		function homePage() {

		};
		homePage.prototype = new basePage();
		homePage.prototype.constructor = homePage;

		homePage.prototype.init = function(argument) {
			this.baseInit();
			this.$homePage = $(homepageT());
			return this;
		}

		homePage.prototype.load = function(argument) {
			this.baseLoad();
			window.document.body.appendChild(this.$homePage[0]);
			this.bindEvent();
			return this;
		}

        homePage.prototype.bindEvent =function  (argument) {
        	this.on($(),navigateGamePage);
        }

        function  navigateGamePage	(argument) {

        	console.log("enter gamePage");
        }
		return homePage;
	});
})(
	typeof define === 'function' && define.amd ? define : function(factory) {
		module.exports = factory(require);
	}
	// Boilerplate for AMD and Node
);