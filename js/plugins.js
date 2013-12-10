// Avoid `console` errors in browsers that lack a console.
;(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

;(function(){
    $.fn.fader_block = function( options ){
        var settings = $.extend( true, {}, $.fn.fader_block.defaults, options )
        
        var list = $('#qualities_cloud li')
        var count = list.length-1
        console.log("count", count)
        var randomNumber = Math.floor(Math.random()*10)
        list[randomNumber].setAttribute('class', 'light-cloud')
        return this
    }// end $.fn.fader_block()


    $.fn.fader_block.defaults = {

    }
}())

// Place any jQuery/helper plugins in here.
