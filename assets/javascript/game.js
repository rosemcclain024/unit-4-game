

var randomResult;
var loss;
var win;
var previous = 0;
// setters
// getters

//$(".crystal").attr('class');

randomResult = Math.floor(Math.random() * 69) + 30;


$("#result").html('Random Result: ' + randomResult);

for (var i=0; i<4; i++) {

    var randomNumber = Math.floor(Math.random() * 11) + 1;
    console.log(randomNumber);
    
    var crystal = $("<div>");
        crystal.attr({ 
            "class":  'crystal', 
            "data-random": randomNumber
    });
    
    $(".crystals").append(crystal);
    //console.log(randomNumber);

}

$(".crystal").on('click',function() {



    var num = parseInt($(this).attr('data-random')); 
    //var num = ($(this).attr('data-random'));

    previous += num;
    console.log(previous);

});