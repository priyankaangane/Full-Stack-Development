function rollDice() {
    var randomNum1 = Math.random();
    randomNum1 = randomNum1 * 6;
    randomNum1 = Math.floor(randomNum1) + 1;

    var randomNum2 = Math.random();
    randomNum2 = randomNum2 * 6;
    randomNum2 = Math.floor(randomNum2) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNum1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNum2 + ".png");

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNum2 > randomNum1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}

// Call the rollDice function when the page loads using rollDice() function
window.onload = rollDice;