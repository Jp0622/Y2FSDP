var commonUtil = {
    /**
     @param msg 
     @param type
     */
    alert: function(msg, type){
        if(typeof(type) =="undefined") {
            type = "success";
        }
        var divElement = $("<div></div>").addClass('alert').addClass('alert-'+type).addClass('alert-dismissible').addClass('col-md-4').addClass('col-md-offset-4');
        divElement.css({
            "position": "absolute",
            "top": "80px",
            "z-index": 9999,
        });
        divElement.text(msg);
        var closeBtn = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>');
        $(divElement).append(closeBtn);
        $('body').append(divElement);
        return divElement;
    },
    
    /**
     
     @param msg 
     @param type
     */
    message: function(msg, type) {
        var divElement = commonUtil.alert(msg, type);
        var isIn = false;
        
        divElement.on({
        　　mouseover : function(){isIn = true;},
        　　mouseout  : function(){isIn = false;}
        });

        setTimeout(function() {
            var IntervalMS = 20;
            var floatSpace = 60;
            var nowTop = divElement.offset().top;
            var stopTop = nowTop - floatSpace;
            divElement.fadeOut(IntervalMS * floatSpace);
            
            var upFloat = setInterval(function(){
                if (nowTop >= stopTop) {
                    divElement.css({"top": nowTop--});
                } else {
                    clearInterval(upFloat);
                    divElement.remove();
                }
            }, IntervalMS);

            if (isIn) {
                clearInterval(upFloat);
                divElement.stop();
            }
            
            divElement.hover(function() {
                clearInterval(upFloat);
                divElement.stop();
            },function() {
                divElement.fadeOut(IntervalMS * (nowTop - stopTop));
                upFloat = setInterval(function(){
                    if (nowTop >= stopTop) {
                        divElement.css({"top": nowTop--});
                    } else {
                        clearInterval(upFloat);
                        divElement.remove();
                    }
                }, IntervalMS);
            });
        }, 1500);
    }
}