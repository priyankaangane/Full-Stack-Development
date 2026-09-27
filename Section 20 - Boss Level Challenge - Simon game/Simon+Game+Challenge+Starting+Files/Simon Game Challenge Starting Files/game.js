//alert("hello")

//Creating a new empty array known as gamepattern
var gamePattern= []; 

//At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//Creating an array of colors
var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;
var started = false;
//Creating a function of random sequence of numbers between 0-3
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    //Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);

    //Adding the randomchosencolor to the empty array
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    //Use jQuery to select the button with the same id as the randomChosenColour
    // WRONG => $("button").attr("randomChosenColor");
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //Make sure that you add script in HTML

    //Adding audio to the selected button
    // var music = new Audio("sounds/"+randomChosenColour+".mp3");
    // music.play();
    //OR
    playSound(randomChosenColour);

    //Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;
    $("h1").text("Level "+ level)
}

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$("button").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length-1); //. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    //this "userClickedPattern.length-1" is passed into the function as currentlevel.
});

//Create a new function called playSound() that takes a single input parameter called name.
function playSound(name){
    //Adding audio to the selected button
    var music = new Audio("sounds/"+name+".mp3");
    music.play();
}

//Step 6 - Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

// Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function(event){
    console.log(event.key);
    if(!started){
        started = true;
        nextSequence();
         
    }
})

//Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern=[];
        }
    }
    else{
        console.log("Wrong");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
//NOTE : Important: gamePattern is not reset. We want to keep the previous colours because the next level's sequence includes them. Only userClickedPattern gets cleared.
//Restarting the game:
function startOver(){
    level = 0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;
}

