var app = app || {};

app.component1 = (function(){
	// create empty el to take on attributes of the main el
	var el = null;

    function logName(){
        console.log('hello from component1: ', el.params.name);
        let $name = document.querySelector("#app-name")
        $name.innerHTML = el.params.name;
    }

	function init(){
        console.log("component1");
        el = app.main.el;
        console.log(el);
        // get the el from app and then run your functions
        logName();
	}

	return {
		init: init
	}
})();
