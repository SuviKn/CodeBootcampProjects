// Detecting button press
// adding event listeners to all drum button

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i=0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // What to do when clicked
    var buttonInnerHTML = this.innerHTML; // this is referring to the button element

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

// Detecting keyboard press

document.addEventListener("keydown", function() {

  makeSound(event.key);

  buttonAnimation(event.key);

});

// Play the relevant sound depending on the button or key

function makeSound(key) {

  switch (key) {
    case "w": // first button is w
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    default: console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // adding the class .pressed

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); // 100 ms --> 1s

}
