document.getElementById("clickMe").addEventListener('click', function xyz(){
    console.log("clicked me");

    function DOMCONTENTLOADED(){console.log("DOM has loaded");}

    DOMCONTENTLOADED();
})