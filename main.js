requirejs.config({
	paths:{
		jquery:'node_modules/jquery/dist/jquery',
		_:'node_modules/underscore/underscore',

		baseEvent:'lib/core/baseEvent',
		basePage:'lib/core/basePage',
		baseUserControl:'lib/core/baseUserControl',
		pageNavigator:'lib/core/pageNavigator',

		homePage:'lib/page/homePage/homePage',
		homePageT:'lib/page/homePage/homePageT',
		gamePage:'lib/page/gamePage/gamePage',
		gamePageT:'lib/page/gamePage/gamePageT',

		filmdata:'lib/data/filmdata',

        app:'lib/core/app'
	}
});

requirejs(['app'],function() {
	console.log("app launched now!!!")
});
