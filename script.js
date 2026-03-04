let totalGames = 0;
let humanScore = 0;
let aiScore = 0;

function playGame(humanChoice) {
  totalGames++;
  document.getElementById("totalGames").innerText = totalGames;
  const choices = ["Rock", "Paper", "Scissors"];
  const aiChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("humanChoice").innerText = humanChoice;
  document.getElementById("aiChoice").innerText = aiChoice;

  if (humanChoice === aiChoice) {
    document.getElementById("result").innerText = "It's a Draw!";
  } else if (
    (humanChoice === "Rock" && aiChoice === "Scissors") ||
    (humanChoice === "Paper" && aiChoice === "Rock") ||
    (humanChoice === "Scissors" && aiChoice === "Paper")
  ) {
    humanScore++;
    document.getElementById("result").innerText = "You Win!";
  } else {
    aiScore++;
    document.getElementById("result").innerText = "AI Wins!";
  }

  document.getElementById("humanScore").innerText = humanScore;
  document.getElementById("aiScore").innerText = aiScore;
}

function resetGame() {
  humanScore = 0;
  aiScore = 0;
  totalGames = 0;

  document.getElementById("humanScore").innerText = 0;
  document.getElementById("aiScore").innerText = 0;
  document.getElementById("totalGames").innerText = 0;

  document.getElementById("result").innerText = "Choose Your Move";
}
