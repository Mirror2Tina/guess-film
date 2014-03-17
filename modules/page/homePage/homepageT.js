// <nav id="menu">
// <ul>
//   <li><a href="html/game.html">start</a></li>
//   <li><h2>help</h2></li>
//   <li><h2>exit</h2></li>
// </ul>
// </nav>

(function(define) {
	define(function(require) {
		require('_');
		console.log("homepageT");

		if (!window.JST) {
			window.JST = {};
		}
		window.JST['homepageUI'] = _.template('<nav id="menu"><ul><li><a href="html/game.html">start</a></li><li><h2>help</h2></li><li><h2>exit</h2></li></ul></nav>');
	});
})(
	typeof define === 'function' && define.amd ? define : function(factory) {
		module.exports = factory(require);
	}
	// Boilerplate for AMD and Node
);