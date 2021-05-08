/* Javascript */

function message() {
    alert("I'm like a seed in the wind...");
}

$(document).ready(function(){
    $('#animation').hide();

    console.log("Your index.js file is loaded correctly!");

    $("#toggle").on("mouseover", function(){
        $("#animation").fadeIn(2500);
        console.log("You clicked on #toggle");
    });

    $("#animation").on("click", function() {
        $("#animation").fadeOut(2500);
        console.log("You clicked on #animation");
    });

    $('#toggle').mouseenter(function() {
        $(this).css("box-shadow", "3px 3px 3px #7fff00");
       }).mouseleave(function(){
         $(this).css("box-shadow", "0px 0px 0px #7fff00");
     });

});

