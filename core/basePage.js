(function(define) {
define(function(require) {

    var baseEvent=require('baseEvent');
    function basePage() {
        console.log("basePage constructor")
    };

    basePage.prototype = new baseEvent();

    basePage.prototype.constructor = basePage;

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