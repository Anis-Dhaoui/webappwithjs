// ****** Document Object Model Manipulation (DOM) ********

// document.addEventListener("DOMContentLoaded",
// function (event){
//     function sayHello (event) {
//         this.textContent = "Said it";
//         var name = document.getElementById("name").value;
//         //var message = "Hello " + name + "!";
//         var message = "<h2> Hello " + name + "! </h2>";
//         //document.getElementById("content").textContent = message;
//         document.getElementById("content").innerHTML = message;
    
//         if (name === "student"){
//             var title = document.querySelector("#title").textContent;
//             title += "  lovin' it";
//             document.querySelector("#title").textContent = title;
//         };
//     }
    
//     // *********** Unobstrusive Event Binding ***********
    
//     document.querySelector("button").addEventListener("click", sayHello);

//     document.querySelector("body").addEventListener("mousemove",
//     function (event) {
//         if (event.shiftKey === true){
//             console.log("x:  ", +event.clientX);
//             console.log("y:  ", + event.clientY);
    
//         }        
//     }
//     )
    
// }
// );

// function sayHello () {
//     this.textContent = "Said it";
//     var name = document.getElementById("name").value;
//     //var message = "Hello " + name + "!";
//     var message = "<h2> Hello " + name + "! </h2>";
//     //document.getElementById("content").textContent = message;
//     document.getElementById("content").innerHTML = message;

//     if (name === "student"){
//         var title = document.querySelector("#title").textContent;
//         title += "  lovin' it";
//         document.querySelector("#title").textContent = title;
//     };
// }

// // *********** Unobstrusive Event Binding ***********

// document.querySelector("button").addEventListener("click", sayHello);

// // document.querySelector("button").onclick = sayHello;


//******* AJAX Basics Lecture 57 ******/

//Event Handling

document.addEventListener("DOMContentLoaded", 
function (event){
    //Unobstrusive event binding
    document.querySelector("button").addEventListener("click", 
    function () {


        // Call Server to get the name
        $ajaxUtils.sendGetRequest("/data/name.txt", 
        function (getName){
            var name = getName.responseText;

            
            document.querySelector("#content").innerHTML = "<h2>Hello  " + name + "!";
        });
        
    });
});