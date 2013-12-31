//Validation Script for Form Validation
//flipLink.js 1.0
//@Author MUNSIF MULLA [ http://www.github.com/munsifmulla/ ]
//Date Started : 31/12/2013

(function ($) {
    $.fn.flipLink = function (options) {

        var config = $.extend({
            flip:'verticle'
        }, options);

        var _main = this;
        $(_main).find('a').each(function(v, a){
            var _thiscont = $(a).html();
            $(a).html("");
            var _flipelemNorm = $('<span></span>');
            _flipelemNorm.html(_thiscont);
            var _breakElem = $("<br/>")
            var _flipelemHover = $('<span></span>');
            _flipelemHover.html(_thiscont);

            $(a).append(_flipelemNorm);
            $(a).append(_breakElem);
            $(a).append(_flipelemHover);

            switch(config.flip){
                case 'verticle':
                    ($(a).hasClass("flipVert flipHort")) ? $(a).toggleClass("flipVert") : $(a).addClass("flipVert");
                    break;
                case 'horizontal':
                    ($(a).hasClass("flipVert flipHort")) ? $(a).toggleClass("flipHort") : $(a).addClass("flipHort");
                    //Set Width
                    var _getFontSize = $(a).css("fontSize");
                    var _getlength = _thiscont.split();
//                    alert(_thiscont.length);
                    $(a).css("width",(_thiscont.length /2.7)*parseInt(_getFontSize));
                    break;
            }
        });
    }
}(jQuery));
