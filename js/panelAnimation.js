var panelAnimation = (function(){
	var panels = document.querySelectorAll('.panel'),
		dataNav = document.querySelectorAll('a[data-url]'),
		curPanel;

	var _getDataUrl = function(ev){
		var dataString = ev.target.getAttribute('data-url');
		return dataString;
	};

	var _clear = function(){
		//Remove Animation
		for(var i = 0; i <= panels.length-1; i++){
			panels[i].classList.remove('js-block');
			panels[i].classList.remove('js-fade-in');
		}
	};

	var _showPanel = function(whichPanel){
		//alert(whichPanel);
		//Set Default Panel For Home Page
		if(!whichPanel) {
			whichPanel = panels[0].id;
		}

		var elem = document.getElementById(whichPanel);

		_clear();

		//Begin Animation
		elem.classList.add('js-block');
		elem.classList.add('js-fade-in');
	};

	var _togglePanel = function(ev){
		ev.preventDefault();

		//Cancel click when current click panel is displayed
		if(curPanel === _getDataUrl(ev)){
			return;
		}

		//Set Current Panel
		var kickoff = !curPanel ? curPanel = _getDataUrl(ev) : curPanel = _getDataUrl(ev);

		//Save History State for back/forward browser nav
		window.history.pushState(
			{
				name: curPanel
			},
			null,
			ev.target.href
		);

		//Show Panel
		_showPanel(window.history.state.name);
	};

	var _addEvents = function(){
		//Add listener to each nav item
		for (var i = 0; dataNav.length-1 >= i; i++) {
			dataNav[i].addEventListener('click', _togglePanel);
		}
	};

	var _init = function(elem){
		_addEvents();
	};

	//Public API
	return {
		init : function(){
			_init();
		},
		showPanel : function(whichPanel){
			_showPanel(whichPanel);
		}
	};

})();

panelAnimation.init();