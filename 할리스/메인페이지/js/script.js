$(function () {
    // top버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $("#top_button").fadeIn();
        } else {
            $("#top_button").fadeOut();
        };
    });

    $("#top_button").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });


    // ----------------------------------------------------------------------------
    // 서브메뉴
    var $submenuBg = $("#submenu_bg");
    var $submenus = $(".submenu");

    // 높이를 px로 지정하게 되면 브라우저 환경(소비자들의 글꼴)에 따라 
    // .submenu 요소의 높이가 달라질 수 있기 때문에
    // JavaScript 프로그램에서 .submenu 요소의 높이를 구해
    // #submenu-container 요소의 높이를 설정한다.
    $submenuBg.height( $submenus.outerHeight() );

    $("#menu > li > a").on("click", function (event) {
        event.preventDefault();

        $submenus.slideDown();
        $submenuBg.slideDown();
        $submenuBg.css({"border-top" : "1px solid #ba000c"});
    });

    $("#nav").mouseleave(function () {
        $submenus.slideUp();
        $submenuBg.slideUp();
    });


    // ----------------------------------------------------------------------------
    // 이미지 슬라이드
    var $slide = $("#slide");
    var timerId = window.setInterval(slideImage, 3000);

    // 슬라이드가 호버되면 움직이지 않음
    $("#imgSlide").hover(
        function () {
            window.clearInterval(timerId);
        },
        function () {
            timerId = window.setInterval(slideImage, 3000);
        }
    );

    // 이전 슬라이드
    $("#imgSlide > button:nth-child(2)").on("click", function () {
        $slide.prepend( $slide.children(":last") )
        .css("margin-left", "-100%").animate({"margin-left": 0});
    });

    // 다음 슬라이드
    $("#imgSlide > button:nth-child(3)").on("click", slideImage);
    
    // slideImage
    function slideImage() {
        $slide.animate({"margin-left": "-100%"}, function() {
            $slide.removeAttr("style").children(":first").appendTo($slide);
        });
    }


    // ----------------------------------------------------------------------------
    // 이벤트 배너
    var $eventslide = $("#eventBanner > ul").length;

    var timerId = window.setInterval(eventSlideImage, 3000);

    var $indicator = $("#indicator > a");
    var slideIndex = 1;
    var indicatorIndex = 0;

    $("#eventBanner").hover(
        function () {
            window.clearInterval(timerId);
        },
        function () {
            timerId = window.setInterval(eventSlideImage, 3000);
        }
    );
    
    // ----------------------------------------------------------------------
    $indicator.on("click", function (event) {
        event.preventDefault();
        
        slideIndex = $eventslide.children().index(this);
        indicatorIndex = $indicator.index(this);
        slideIndex = indicatorIndex;
        
        $(this).addClass("on").siblings().removeClass("on");
        $eventslide.addClass("on").siblings().removeClass("on");
    });
    
    // ----------------------------------------------------------------------
    function eventSlideImage () {
        $eventslide.animate({"margin-left": "-100%"}, function () {
            $eventslide.removeAttr("style").children(":first").appendTo($eventslide);
        });
    }

}); // document.onready