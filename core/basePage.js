(function(define) {
define(function(require) {

	function basePage () {
	};

    basePage.prototype.baseInit = function() {
		console.log('baseinit')
    };

    basePage.prototype.baseLoad = function() {
        console.log('baseLoad');
    };

    // basePage.prototype.render =function(){

    // }
    return basePage;
});
})(
	typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
	// Boilerplate for AMD and Node
);