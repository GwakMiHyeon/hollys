$(function () {
    // top버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
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


    // ---------------------------------------------------------
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


    // ---------------------------------------------------------
    // 사이드메뉴
    $("#side_menu > li > a").click(function () {
        $(this).next().slideDown();
        $(this).children('span').text("-");
    }); 
    
    $("#side_menu > li").mouseleave(function () {
        $(".side_submenu").slideUp();
        $("#side_menu > li > a > span").text("+");
    });

    
    // ---------------------------------------------------------
    // 클릭 시 커피 제품정보 보이기 & 닫기
    $(".coffee_img").click(function () {
        $(this).next().fadeIn();
    });

    $(".close").click(function () {
        $(this).parent().fadeOut();
    });
            
}); // document.onready