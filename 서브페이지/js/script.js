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
    window.addEventListener("load", function () {
        var menuItems = document.getElementsByClassName("menu-item");
        var sideMenus = document.getElementsByClassName("side_submenu");
        
        // 1. .menu-item 요소를 클릭하면
        //      → .menu-item 요소에 click 이벤트 핸들러를 연결
        for (var i = 0; i < menuItems.length; i++)
        
        menuItems[i].addEventListener("click", function (event) {
            // 기본 이벤트 제거
            event.preventDefault();
            
            // click 이벤트가 발생한 요소의 다음에 나오는 .sideSubmenu 요소
            var sideSubmenu = this.nextElementSibling;

            //  2. 그 다음에 나오는 .sideSubmenu 요소가 화면에 표시된 상태이면
            if (sideSubmenu.style.display == "block") {
                // 2.1. 그 다음에 나오는 .sideSubmenu 요소를 화면에서 숨긴다. 
                sideSubmenu.removeAttribute("style");
            } else {
                // 3.1. 이전에 화면에 표시된 .sideSubmenu 요소를 화면에 숨기고
                //      → 반복문을 이용해 배열 sideMenus의 각 원소들을 확인
                for (var i = 0; i < sideMenus.length; i++)
                sideMenus[i].removeAttribute("style");
                sideSubmenu.style.display = "block";
            }
        });
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