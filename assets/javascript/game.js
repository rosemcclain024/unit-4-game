//disclaimer: I decided to change the theme of this AFTER i already names all my classes and things with crystals so bare with me lol I just really wanted to use pics of plants

//double disclaimer, i'm not sure the instructions to this game are very helpful but i am tired and can fix it eventually. 

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

    


    //crystal.html(randomNumber);

    $(".crystals").append(crystal);
    //console.log(randomNumber);

}
for (var i = 0; i < 4; i++) {
$("."+i).append("<img src='./assets/images/image_"+i+".jpg' width='100%' height='auto'>");
}





function reset() {
    randomResult = Math.floor(Math.random() * 120) + 19;

    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++) {

        randomNumber = Math.floor(Math.random() * 11) + 1;
        console.log(randomNumber);
        $("."+i).attr({
         "class": 'crystal '+i,
         "data-random": randomNumber
        }
        )
        $("."+i).html("");
    
        //crystal.html(randomNumber);
    
        $(".crystals").append(crystal);

        $("."+i).append("<img src='../assets/images/image_"+i+".jpg' width='100%' height='auto'>");

        //crystal.html("");
        //console.log(randomNumber);
    
    }

    previous = 0;

}


$(".crystal").on('click', function () {



    var num = parseInt($(this).attr('data-random'));
    //var num = ($(this).attr('data-random'));

    previous += num;
    console.log(previous);
    $("#added").html(previous);


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


















