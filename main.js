'use strict';
//var requirejs = require('requirejs');
//console.log(requirejs);
require.config({
	paths:{
		jquery:'node_modules/jquery/dist/jquery'
	}
});
require(['jquery'
	],function  ($) {
		console.log("begin",$);
	});