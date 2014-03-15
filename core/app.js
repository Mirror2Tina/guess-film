


(function(define){
    define(function(require){
	// var homepage = $(window.JST['homepageUI']());
	// document.body.appendChild(homepage[0]);
})
})(typeof define === 'function' && define.amd ? define:function  (factory) {
	module.exports = factory(require);
});

// (function(define) {
// define(function(require) {

// 	var timeout, delay;

// 	timeout = require('./timeout');
// 	delay = require('./delay');

//     return {
//         timeout: timeout,
//         delay: delay
//     };

// });
// })(
// 	typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
// 	// Boilerplate for AMD and Node
// );