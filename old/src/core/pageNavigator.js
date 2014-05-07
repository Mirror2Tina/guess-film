(function(define) {
	define(function(require) {
		function pageNavigator(page) {

			page.init().load();
		}

		return pageNavigator;
	});
})(
	typeof define === 'function' && define.amd ? define : function(factory) {
		module.exports = factory(require);
	}
	// Boilerplate for AMD and Node
);