// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd");
var bttnStartGame = document.getElementById("bttnStartGame");
var playerLine = document.getElementById("playerLine");
var turnLine = document.getElementById("turnLine");

// EVENT LISTENERS 🎧
// The algorithm:
// - Put a single handler on a container
// - In the handler - check the source element using event.target
// - If the event happened inside an element that interests us, then handle the event
boardBckgrnd.addEventListener("click", markTheBoard);
bttnStartGame.addEventListener("click", startGamePlay);

function startGamePlay() {
  game.startGame();
  bttnStartGame.classList.add("hidden");
  turnLine.classList.remove("hidden");
  playerLine.classList.remove("hidden");
  playerLine.innerText = game.currentPlayer.token;
}

function markTheBoard() {
  var clickedBox = event.target.closest(".box");
  game.placeToken(clickedBox);
  clickedBox.innerText = game.currentPlayer.token;
  announceGameEnd();
  if (!game.hasWinner && game.playCount <= 8) {
    game.takeTurns();
    playerLine.innerText = game.currentPlayer.token;
  }
}

function announceGameEnd() {
  if (game.playCount >= 5 && game.hasWinner) {
    turnLine.classList.add("hidden");
    playerLine.innerText = `${game.currentPlayer.token} is the Winner!`;
    // need to disable further clicks on the board
    boardBckgrnd.classList.add(".no-click");
  } else if (game.playCount >= 9 && !game.hasWinner) {
    console.log("nobody won");
    playerLine.innerText = "This game is a draw. Nobody won!";
  }
}

// 🤷‍♀️VARIABLES I MIGHT WANT TO USE LATER
// var clickedBox = event.target.closest('.box');
// var clickedBox = event.target.id;
