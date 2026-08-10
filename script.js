let snakeButton = document.getElementById("snake");
let waterButton = document.getElementById("water");
let gunButton = document.getElementById("gun");

let resultText = document.getElementById("result-text");
let playerChoiceText = document.getElementById("player-choice");
let computerChoiceText = document.getElementById("computer-choice");
let resetButton = document.getElementById("reset");
let playerScoreText = document.getElementById("player-score");
let computerScoreText = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

let choices = {
    0: "Snake",
    1: "Water",
    2: "Gun"
};

function playGame(playerChoice) {

    let computerChoice = Math.floor(Math.random() * 3);

    playerChoiceText.textContent = "You: " + choices[playerChoice];
    computerChoiceText.textContent = "Computer: " + choices[computerChoice];


    console.log("You chose " + choices[playerChoice]);
    console.log("Computer chose " + choices[computerChoice]);

    if (playerChoice === computerChoice) {
    resultText.textContent = "Draw!";
}

else if (
    (playerChoice === 0 && computerChoice === 1) ||
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 0)
) {
    resultText.textContent = "You Win!";

    playerScore++;
    playerScoreText.textContent = playerScore;
}

else {
    resultText.textContent = "You Lose!";
    computerScore++;
    computerScoreText.textContent = computerScore;
}
}

snakeButton.addEventListener("click", function() {
    playGame(0);
});

waterButton.addEventListener("click", function() {
    playGame(1);
});

gunButton.addEventListener("click", function() {
    playGame(2);
});

resetButton.addEventListener("click", function() {
    playerChoiceText.textContent = "You: —";
    computerChoiceText.textContent = "Computer: —";
    resultText.textContent = "Choose an option to start!";

    playerScore = 0;
computerScore = 0;

playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;
});