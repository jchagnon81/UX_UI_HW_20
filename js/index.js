/* Javascript */

$(document).ready(function(){
    $('#animation').hide();

    console.log("Your index.js file is loaded correctly!");

    $("#toggle").on("click", function(){
        $("#animation").fadeIn(2500);
        console.log("You clicked on #toggle");
    });

    $("#animation").on("click", function() {
        $("#animation").fadeOut(2500);
        console.log("You clicked on #animation");
    });

});

