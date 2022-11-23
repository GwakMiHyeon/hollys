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
    
    var timerId = window.setInterval(slideImg, 3000);
    
    $("#imgSlide").hover(
        function () {
            window.clearInterval(timerId)
        },
        
        function () {
            timerId = window.setInterval(slideImg, 3000);
        }
    );

    // prev 버튼
    $("#prev").on("click", function () {
        $slide.prepend($slide.children(":last")).css("margin-left", "-100%").animate({"margin-left": 0});
    });

    // next 버튼
    $("#next").on("click", slideImg);

    // slideImg
    function slideImg() {
        $slide.css({"margin-left": "-100%", "transition-duration": "400ms"});
        
        window.setTimeout(function () {
            $slide.removeAttr("style").children(":first").appendTo($slide);
        }, 400);
    }
    
    // ----------------------------------------------------------------------------
    // 모바일 이미지 슬라이드
    var $mobileSlide = $("#mobile_slide");

    var timerId = window.setInterval(mobileSlideImg, 3000);
    
    // prev 버튼
    $("#prev").on("click", function () {
        $mobileSlide.prepend($mobileSlide.children(":last")).css("margin-left", "-100%").animate({"margin-left": 0});
    });

    // next 버튼
    $("#next").on("click", mobileSlideImg);

    // slideImg
    function mobileSlideImg() {
        $mobileSlide.css({"margin-left": "-100%", "transition-duration": "400ms"});
        
        window.setTimeout(function () {
            $mobileSlide.removeAttr("style").children(":first").appendTo($mobileSlide);
        }, 400);
    }


    // ----------------------------------------------------------------------------
    // 이벤트 배너
    var $eventBanners = $("#eventBanner > ul");
    var bannerIndex = 0;
    var bannerLength = $eventBanners.children().length;

    var timerId = window.setInterval(bannerSlideImage, 3000);

    $("#eventBanner").hover(
        function () {
            window.clearInterval(timerId);
        },
        function () {
            timerId = window.setInterval(bannerSlideImage, 3000);
        }
    );
    
    // 인디케이터
    // #eventBanner > ul의 li갯수만큼 인디케이터 li를 생성
    var $indicator = $("<ol></ol>").attr("id", "indicator");

    $eventBanners.children().each(function (index) {
        $("<li></li>").appendTo("<span>" + (index + 1) + "</span>").appendTo($indicator);
    });

    $indicator.appendTo("#eventBanner");
    $indicator.children(":first").addClass("on");

    // #indicator요소의 li를 클릭하면
    $indicator.children().on("click", function () {
        // #eventBanner에 표시되고 있는 이미지 = li를 클릭한 경우 이벤트 핸들러 종료
        if ($(this).is(".on")) return;

        var indicatorIndex = $indicator.children().index(this);

        // #eventBanner이미지와의 인덱스 차이
        var step = indicatorIndex - bannerIndex;

        // 왼쪽으로만 이동하도록 만들기 위해 변수step이 음수이면 bannerLength를 변경
        if (step < 0) step += bannerLength;
        
        // #bannerIndex요소의 영역에 표시되는 이미지가 바뀌므로 변수 indicatorIndex를 변경
        bannerIndex = indicatorIndex;

        // #indicator요소에서 강조되는 요소를 변경
        // $indicator.children().removeClass("on").eq(bannerIndex).addClass("on");
        $indicator.children().removeClass("on");
        $(this).addClass("on");

        // #eventBanner > ul 요소를 위에서 계산 칸만큼 왼쪽으로 이동시킨다.
        $eventBanners.animate({"margin-left" : step * -100 + "%"}, function () {
            $eventBanners.removeAttr("style").children(":lt(" + step + ")").appendTo($eventBanners);
        });
    });

    // bannerSlideImage의 편한 사용을 위해 따로 지정
    function bannerSlideImage () {
        bannerIndex++;
        bannerIndex %= bannerLength;

        $indicator.children().removeClass("on").eq(bannerIndex).addClass("on")

        $eventBanners.animate({"margin-left": "-100%"}, function () {
            $(this).removeAttr("style").children(":first").appendTo(this);
        });
    }

}); // document.onready