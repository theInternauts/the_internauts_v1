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
        var count = list.length
        console.log("count", count)
        console.log("array: ", buildNumArray(5, count))

        var randomNumber = Math.floor(Math.random()*count)
        list[randomNumber].setAttribute('class', settings.initialAction)
        return this
    }// end $.fn.fader_block()

    function buildNumArray( number, upperBound ){
        var numArray = new Array(number)
        for(var i =0; i < numArray.length; i++){
            numArray[i] = Math.floor(Math.random()*upperBound)
        }
        return numArray
    }

    $.fn.fader_block.defaults = {
        initialAction: 'light-cloud',
        revertAction: 'dark-cloud'
    }
}())

// Place any jQuery/helper plugins in here.
