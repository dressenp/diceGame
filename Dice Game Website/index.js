// Random Number Generator

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Random Dice Images

let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

// Declare variables of both images

let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");

// Change The images of each dice

image1.setAttribute("src", "images/" + randomDiceImage1);
image2.setAttribute("src", "images/" + randomDiceImage2);

// Set the winner and change the h3 tag

if (randomNumber1 > randomNumber2) {
  document.querySelector("h3").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h3").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h3").textContent = "Draw!";
}
