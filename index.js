// Declare variables of both images

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

// Set the winner and change the h3 tag

document.querySelector("button").addEventListener("click", function () {
    // Random Number Generator
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Random Dice Images
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    // Change The images of each dice
    image1.setAttribute("src", "images/" + randomDiceImage1);
    image2.setAttribute("src", "images/" + randomDiceImage2);

    // Sets the winner
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h3").textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h3").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("h3").textContent = "Draw!";
    }
});
