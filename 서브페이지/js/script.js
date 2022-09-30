$(function () {
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
    // $(".side_submenu > li > a").on("click", function () {
    //     $(".side_submenu > li > a > span").innerText = '∨'
    // });
    
    // $(".side_submenu > li > a").click(function () {
    // $(".side_submenu > li > a > span").text("∧");
    
    $sideSubMenuS = $(".side_submenu > li > a > span");
    
    $(".side_submenu > li > a").click(function() {
        if (sideSubMenuS === "∨") {
            sideSubMenuS.text("∧");
        } else if (sideSubMenuS === "∧") {
            sideSubMenuS.text("∨");
        }
    });

}); // document.onready