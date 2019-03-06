

var randomNumber;
var crystal;

var randomResult;
var loss = 1;
var win = 1;
var previous = 0;
// setters
// getters

//$(".crystal").attr('class');

randomResult = Math.floor(Math.random() * 120) + 19;


$("#result").html('Random Result: ' + randomResult);

for (var i = 0; i < 4; i++) {

    randomNumber = Math.floor(Math.random() * 11) + 1;
    console.log(randomNumber);

    crystal = $("<div>");
    crystal.attr({
        "class": 'crystal '+i,
        "data-random": randomNumber
    });

    crystal.html(randomNumber);

    $(".crystals").append(crystal);
    //console.log(randomNumber);

}





function reset() {
    randomResult = Math.floor(Math.random() * 120) + 19;

    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++) {

        randomNumber = Math.floor(Math.random() * 11) + 1;
        console.log(randomNumber);
        $("."+i).attr({
         "data-random": randomNumber
        }
        )
        $("."+i).html(randomNumber);
    
        crystal.html(randomNumber);
    
        $(".crystals").append(crystal);
        //console.log(randomNumber);
    
    }

    previous = 0;

}


$(".crystal").on('click', function () {



    var num = parseInt($(this).attr('data-random'));
    //var num = ($(this).attr('data-random'));

    previous += num;
    console.log(previous);

    if (previous > randomResult) {
        console.log("You lose :(");
        $(".loss").html("Loss: " + loss++);
        reset();

    }
    else if (previous === randomResult) {
        console.log("You won!");
        $(".win").html("Win: " + win++);
        reset();

    }


    if (randomNumber === randomResult) {

    }
});


















