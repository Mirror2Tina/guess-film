requirejs.config({
	paths:{
		jquery:'node_modules/jquery/dist/jquery',
		_:'node_modules/underscore/underscore',

		basePage:'core/basePage',
		pageNavigator:'core/pageNavigator',

		homePage:'modules/page/homePage/homePage',
		homePageT:'modules/page/homePage/homePageT',
		gamePage:'modules/page/gamePage/gamePage',
		gamePageT:'modules/page/gamePage/gamePageT',

		filmdata:'data/filmdata',

        app:'core/app'
	}
});

requirejs(['app'],function() {
	console.log("app launched now!!!")
});
