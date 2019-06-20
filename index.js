var app = app || {};

app.main = (function() {
    var el = {
        params: {
            name:"hello world",
            description: "this is suuuuuuper bueno"
        }
    };


    var initApp = function() {
        console.log(el.params);
    }


    // get it all going!
    var init = function() {
        initApp();
    }


    // only return init() and the stuff in the el object
    return {
        init: init,
        el: el
    }


})();

// call app.map.init() once the DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    app.main.init();
    app.component1.init();
    app.component2.init();
});