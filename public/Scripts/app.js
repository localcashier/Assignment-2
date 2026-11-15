// IIFI --> Immediately Innvoked function expression
(function () {
    function Start() {
        console.log("App started...");
    }
    
    window.addEventListener("load", Start);
})();

