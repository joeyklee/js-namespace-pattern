var app = app || {};

app.component2 = (function(){
	// create empty el to take on attributes of the main el
	var el = null;

    function logDescription(){
        console.log('hello from component2: ', el.params.description);
        let $desc = document.querySelector("#app-desc")
        $desc.innerHTML = el.params.description;
    }

	function init(){
        console.log("component2");
        el = app.main.el;
        // get the el from app and then run your functions
        logDescription();
	}

	return {
		init: init
	}
})();
