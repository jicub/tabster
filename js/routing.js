var routing = (function(){

	var _getURL = function(){
		var url = window.location.href;

		return url;
	};

	var _getHashFragment = function(){
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

	var _fadeInFragment = function(){
		//Catch browser error on page refresh
		try{
			if(window.history.state.name);
		}catch(err){
			_updatePushState();
		}

		//Init js/panelAnimation.js
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