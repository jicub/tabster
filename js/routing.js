var routing = (function(){
	//var currentLink;

	var _getURL = function() {
		var url = window.location.href;

		return url;
	};

	var _getHashFragment = function() {
		var url = window.location.href,
			hashFragment = url.split('#')[1];

			return hashFragment;
	};

	var _updatePushState = function(){
		window.history.pushState(
			{
				name: _getHashFragment()
			},
			'',
			_getURL()
		);
	};

	var _fadeInFragment = function () {
		//init js/panelAnimation.js
		window.panelAnimation.showPanel(window.history.state.name);
	};

	var _setupEventHandlers = function(){
		window.addEventListener('popstate', _fadeInFragment);
	};

	//Public API
	return {
		init : function(){
			_updatePushState();
			_fadeInFragment();
			_setupEventHandlers();
		}
	};

})();

routing.init();