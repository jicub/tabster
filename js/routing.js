var routing = (function(){
    var urlString = window.location.href,
        currentLink,
        hashLink = urlString.split('#')[1],
        setPanel = hashLink === undefined || hashLink === '' ? currentLink = 'home' : currentLink = hashLink;

    //init panelAnimation.js
    window.panelAnimation.showPanel(currentLink);
})();