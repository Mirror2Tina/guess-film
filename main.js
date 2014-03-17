requirejs.config({
	paths:{
		jquery:'node_modules/jquery/dist/jquery',
		_:'node_modules/underscore/underscore',

		basePage:'core/basePage',
		pageNavigator:'core/pageNavigator',

		homepage:'modules/page/homePage/homepage',
		homepageT:'modules/page/homePage/homepageT',

        app:'core/app'
	}
});

requirejs(['app'],function() {
	console.log("app launched now!!!")
});
