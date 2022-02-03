// Generate random numbers for both dices
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

// Create image paths for both pictures
var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

// Set new attribute as img source

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);


// Check the numbers in console

console.log(randomNumber1);
console.log(randomNumber2);


// Function for indicating the winner

function winner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
  }
  else {
    document.querySelector("h1").textContent = "Draw!";
  }
};

winner();
