console.log("Hello World!");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors, Shoot!");
  choice = choice.toLowerCase();

  return choice;
}

let humanScore = 0;
let computerScore = 0;

const humanScoreElem = document.querySelector("#humanScore");
const computerScoreElem = document.querySelector("#computerScore");
const feedback = document.querySelector("#feedback");
humanScoreElem.textContent = "0";
computerScoreElem.textContent = "0";

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    feedback.textContent = "Draw!";
  }

  // Human choice loses
  else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    computerScoreElem.textContent = `${computerScore}`;
    feedback.textContent = "You Lose! :(";

    // Human choice wins
  } else {
    humanScore++;
    humanScoreElem.textContent = `${humanScore}`;
    feedback.textContent = "You Win! :)";
  }

  if (humanScore === 5) {
    alert("Game over. You win!");
    location.reload();
  } else if (computerScore === 5) {
    alert("Game over. You lost!");
    location.reload();
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound("scissors");
});
