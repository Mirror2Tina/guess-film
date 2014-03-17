(function(define) {
define(function(require) {

	function basePage () {
	};

    basePage.prototype.init = function() {

    };

    basePage.prototype.load = function() {

    };
    return basePage;
});
})(
	typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
	// Boilerplate for AMD and Node
);