/**
 * 整个程序的生命周期管理模块，启动，暂停，退出
 * @param  {[type]} define [description]
 * @return {[type]}        [description]
 */
(function(define) {
	define(function(require) {
		var pageNavigator = require('pageNavigator')
		homePage = require('homePage');


		pageNavigator(new homePage());

		console.log("app");

	})
})(typeof define === 'function' && define.amd ? define : function(factory) {
	module.exports = factory(require);
});