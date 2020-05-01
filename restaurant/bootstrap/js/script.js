$(function (){ 
//document.addEventListener("DOMContentLoaded", function (event){...})

    $("#navbarToggle").blur(function (event) {
        //document.querySelector("#navbarToggle").addEventListener("blur", function (event){...})
        var screenWidth = window.innerWidth;
        if (screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
})