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


;(function( $, window, document, undefined ){
    $.fn.fader_block = function( options ){
        var settings = $.extend( true, {}, $.fn.fader_block.defaults, options )

        window.setInterval(function(){fader_cycle(settings)},settings.interval)
        
        return this
    }// end $.fn.fader_block()

    function buildNumArray( number, upperBound ){
        var numArray = new Array(number)
        for(var i =0; i < numArray.length; i++){
            numArray[i] = Math.floor(Math.random()*upperBound)
        }
        return numArray
    }

    function fader_cycle( settings ){
        var list = $(settings.selector)

        list.addClass(settings.revertAction)
        list.removeClass(settings.initialAction)
        selectiedPositions = buildNumArray(settings.selectionCount, list.length)
        for(var i = 0; i < selectiedPositions.length; i++){
            list[selectiedPositions[i]].setAttribute('class', settings.initialAction)
        }
    }

    $.fn.fader_block.defaults = {
        initialAction: 'light-cloud',
        revertAction: 'dark-cloud',
        selector: '#qualities_cloud li',
        selectionCount: 4,
        interval: 3000
    }
}( jQuery, window, document ))


// Place any jQuery/helper plugins in here.
