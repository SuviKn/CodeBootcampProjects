
// Array for the button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// store the game pattern in Array
var gamePattern = [];

// Players click click pattern
var userClickedPattern = [];

// detects if the game is started or not
var started = false;

// starting the level count from 0
var level = 0;


// detect keystrokes
$(document).keydown(function() {

  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});


// Detect when any button is clicked and store the button ID to userChosenColor
$(".btn").click(function() {

  // this is referring to .btn
  var userChosenColor = $(this).attr("id");

  // add the users clicked color to the userClickedPattern array
  userClickedPattern.push(userChosenColor);

  // calls the playSound() when user clicks button
  playSound(userChosenColor);

  // calls the button animation function and passes the color as argument
  animatePress(userChosenColor);

  // check if the answer is correct
  checkAnswer(userClickedPattern.length -1);

})


// generating random numbers for the button sequence
function nextSequence() {

  // when the nextSequence() is called the userClickedPattern array is reset for the next Level
  userClickedPattern = [];
  // increase level everytime nexSequence is called
  level ++;
  //update the title according to the Level
  $("#level-title").text("Level " + level);

  // generate random number between 0-3
  var randomNumber = Math.floor(Math.random() * 4);

  // Choose color based on the generated random number
  var randomChosenColor = buttonColors[randomNumber];

  // add the new randomly chosen color to the game pattern array
  gamePattern.push(randomChosenColor);

  // animation for the randomly generated color button
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  // calls the playSound() when next sequence is generated
  playSound(randomChosenColor);

}

function playSound(name) {
  // play correct sound for the randomly generated color button
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animates button when its clicked
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
    },100);

}

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //console.log("success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout( function () {nextSequence();
      },1000);

    }

  }

  else {
    //console.log("wrong")
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game over, Press Any Key to Restart");

    startOver();
  }

}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
