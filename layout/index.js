$(document).ready(function () {
    let currentPath = window.location.pathname; // 获取当前页面的路径

    $(".navbar a").each(function () {
        var linkPath = $(this).attr("href"); // 获取每个链接的路径
        if (linkPath === currentPath) {
            $(this).addClass("active"); // 如果链接的路径与当前页面的路径相等，则添加 active 类
        }
    });
    $(".menu-item a").each(function () {
        var linkPath = $(this).attr("href"); // 获取每个链接的路径
        if (linkPath === currentPath) {
            $(this).addClass("active"); // 如果链接的路径与当前页面的路径相等，则添加 active 类
        }
    });

    $("#us").click(function (e) {
        e.stopPropagation();
        $(".us").toggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".us").length) {
            $(".us").hide();
        }
    });

    $("#menu").click(function (e) {
        e.stopPropagation();
        $(".menu").toggle();
    });

    $(".menu").click(function (e) {
        e.stopPropagation();
        $(this).hide();
    });

    $(".menu-item").click(function (e) {
        e.stopPropagation();
    });

    $(".app").click(function (e) {
        window.location.href = 'https://play.google.com/store/apps/details?id=io.menghuan.com'
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".menu").length) {
            $(".menu").hide();
        }
    });
    
});