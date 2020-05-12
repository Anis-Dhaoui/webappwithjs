// (function (global){


// //Set up a NameSpace for our utility
// var ajaxUtils = {};

// //Returns an HTTP Request Object
// function getRequestObject() {
//     if (window.XMLHttpRequest){
//         return (new XMLHttpRequest());
//     }
//     else if (window.ActiveXObject){
//         return (new ActiveXObject("Microsoft.XMLHTTP"));
//     }
//     else {
//         global.alert("Ajax is not supported");
//         return (null);
//     }
// }

// // Makes an Ajax GET Request to 'requestUrl'
// ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
//     var request = getRequestObject();
//     request.onreadystatechange = function () {
//         handleResponse(request, responseHandler)
//     };
//     request.open("GET", requestUrl, true);
//     request.send(null); // for POST only
// };

// function handleResponse (request, responseHandler){
//     if ((request.readyState == 4) && (request.status == 200)){
//         responseHandler(request);
//     }
// }

// //Expose Utility to the global objest
// global.$ajaxUtils = ajaxUtils;
// })(window);

(function (global){

    var ajaxUtils = {};

    function getRequestObject (){
        if (global.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }

    function handleResponse(request, responseHandler) {
        if ((request.readyState == 4) && (request.status == 200)){
            
           
            responseHandler(JSON.parse(request.responseText));
           
        }
    }
    
    ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler);
        };
        request.open("GET", requestUrl, true); // To get the Json file (name.json)
        request.send(null); // for POST only
        console.log(request);
    };

    global.$ajaxUtils = ajaxUtils;
})(window);