/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
(function(define) {
define(function(require) {
'use strict';
     /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
 require(['domReady!'], function (document) {
        //ng.bootstrap(document, ['app']);
        console.log("app lunch")
    });

});
})(
	typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
	// Boilerplate for AMD and Node
);