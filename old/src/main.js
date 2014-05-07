requirejs.config({
	paths:{
		jquery:'node_modules/jquery/dist/jquery',
		_:'node_modules/underscore/underscore',

		baseEvent:'src/core/baseEvent',
		basePage:'src/core/basePage',
		baseUserControl:'src/core/baseUserControl',
		pageNavigator:'src/core/pageNavigator',

		homePage:'src/page/homePage/homePage',
		homePageT:'src/page/homePage/homePageT',
		gamePage:'src/page/gamePage/gamePage',
		gamePageT:'src/page/gamePage/gamePageT',

		filmdata:'src/data/filmdata',

        app:'src/core/app'
	}
});

requirejs(['app'],function() {
	console.log("app launched now!!!")
});
