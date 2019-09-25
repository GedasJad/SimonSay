let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let check = false;
let level = 0;



$(document).keypress(function(){
    if(!check){
        $("h1").text("Level " + level)
        nextSequence();
        check = true;

    }
})

$(".btn").click(function(){

    let userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour)

   playSound(userChosenColour);

  

   animatePress(userChosenColour)
   checkAnwser(userClickedPattern.length-1);
})



function checkAnwser(currentLevel){


    console.log(currentLevel)
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("ture")
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }
    }else{
        playSound('wrong');
        $('body').addClass('game-over');

        setTimeout(function(){
            $('body').removeClass('game-over')
        }, 200);

        $("#level-title").text("Game over. Press any key to start again");
        startOver();
    }

}





function nextSequence(){

    userClickedPattern= [];

    level++
    $("#level-title").text("Level " + level);
    let num = Math.floor(Math.random()*4)

    let randomChosenColour = buttonColours[num];

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(180);

    playSound(randomChosenColour);



}

function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    }, 100)
}


function startOver(){

    check = false;
    level = 0;
    gamePattern = [];

}
