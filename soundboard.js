window.onload = function(){
    var buttonElementBoo = document.getElementById("BooSound")
    var buttonElementFart = document.getElementById("FartSound")
    var buttonElementChampagne = document.getElementById("ChampangePopSound")

    function playBoo(){
        console.log("button1 clicked")
        var audioBoo = new Audio('boo.wav')
        audioBoo.play();
    }


    function playFart(){
        console.log("button2 clicked")
        var audioFart = new Audio('fart_z.wav')
        audioFart.play();
    }

    function playChampange(){
        console.log("button3 clicked")
        var audioChampange = new Audio('champagne.wav')
        audioChampange.play();
    }

    buttonElementBoo.addEventListener("click", playBoo);
    buttonElementFart.addEventListener("click", playFart);
    buttonElementChampagne.addEventListener("click", playChampange);
    buttonElementBoo.addEventListener("mouseenter", playBoo);
    buttonElementFart.addEventListener("mouseenter", playFart);
    buttonElementChampagne.addEventListener("mouseenter", playChampange);
}