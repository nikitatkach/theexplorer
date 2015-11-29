$(document).ready(function () {

    var init = function () {
        grayBg();
        wWidth();
        console.log("init success");
    }

    init();
    
    
    $(window).resize(function () {
        grayBg();
        wWidth();
    });


    // gray background width
    function grayBg() {
        var windowWidth = $('body').width(),
            contantWidth = $('.container-center').innerWidth(),
            bgWidth = (windowWidth - contantWidth) / 2,
            rightWidth = $('.container-wrap .right-container').innerWidth(),
            leftWidth = $('.container-wrap .left-container').innerWidth();

            $('.container-wrap .gray-bg').css({
                width: bgWidth + rightWidth,
                left: leftWidth
            });
    };
    
    
    function wWidth() {
        var wWidth = $(document).width();
        if(wWidth > 750) {
            $("nav").show();
        }
    }

    
    // hide/show nav
    $(".nav-wrap .nav-btn").click(function () {
        $("nav").slideToggle();
        $(".nav-wrap").toggleClass("open");
    });
});