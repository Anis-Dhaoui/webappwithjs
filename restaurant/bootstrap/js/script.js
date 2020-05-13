$(function (){
//document.addEventListener("DOMContentLoaded", function (event) {...})
    $("#navbarToggle").blur(function (event){
    //document.querySelector("#navbarToggle").addEventListener("blur", function (event){...})
       var screenWidth = window.innerWidth;
       if (screenWidth < 768){
           $("#collapsable-nav").collapse('hide');
       }
    })
});

(function (global){
    var dc = {};
    var homeHtml = "snippets/home-snippet.html";

    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector){
        var html = "<div class = 'text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event){
        // On first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml, function (resPage) {
            document.querySelector("#main-content").innerHTML = resPage;
        },false);
    });

    global.$dc = dc;
})(window);