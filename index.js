
var buttonColours = ["red","blue","green","yellow"]
var gamepattern = [];


var userClickedPattern = []

var gamestart = false;
var level = 0;


$('.start').click(function(){
 if(!gamestart){
     $("#level-title").text("level "+level);
        nextSequence();
        gamestart = true;
        }
        })



   
$('.btn').click(function(){

    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatepress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
 })


    function checkAnswer(gamepat) {
        if (gamepattern[gamepat] === userClickedPattern[gamepat]) {
            if (gamepattern.length === userClickedPattern.length) {
                setTimeout(function() {
                    nextSequence(); 
                }, 1000);
            }
        } else {
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
          
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 100);
            startover();
        }
    }

function nextSequence(){
    userClickedPattern = [];
    level ++;
    $("#level-title").text("level "+level);
    var randomnum = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomnum];
     gamepattern.push(randomChosenColour);

   
    animatepress(randomChosenColour);
     
    playsound(randomChosenColour);
   


}

function playsound(name){

    var audio = new Audio("./sounds/"+ name +".mp3");
    audio.play();

}

function animatepress(mname){

$('#'+mname).addClass("pressed");

setTimeout(function() {
    $('#' + mname).removeClass('pressed');
},100);

}


function startover(){
    $("#level-title").text("GAME - OVER "+ " HIGHEST SCORE :"+level);
level = 0;
gamestart = false;
gamepattern = [];
}

