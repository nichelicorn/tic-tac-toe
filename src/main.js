// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd");
var bttnStartGame = document.getElementById("bttnStartGame");
var oWins = document.getElementById("oWins");
var playerLine = document.getElementById("playerLine");
var turnLine = document.getElementById("turnLine");
var xWins = document.getElementById("xWins");

// EVENT LISTENERS 🎧
boardBckgrnd.addEventListener("click", markTheBoard);
bttnStartGame.addEventListener("click", startGamePlay);

// GAME FUNCTIONS 🎴
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
    boardBckgrnd.classList.add("no-click");
    displayWins();
  } else if (game.playCount >= 9 && !game.hasWinner) {
    console.log("nobody won");
    playerLine.innerText = "This game is a draw. Nobody won!";
    boardBckgrnd.classList.add("no-click");
    displayWins();
  }
}

function displayWins() {
  var xWinCount = game.player1.wins;
  var oWinCount = game.player2.wins;
  xWins.innerText = `${xWinCount}!`;
  oWins.innerText = `${oWinCount}!`;
  // console.log("player1 X wins:", game.player1.wins);
  // console.log("xWinCount:", xWinCount);
  // console.log("player2 O wins:", game.player2.wins);
  // console.log("oWinCount:", oWinCount);
}

// 🏁 WHAT IS NEXT?
// - √ display player data in the sidebars
  // - √ target the player wins in both sidebars
  // - √ update innerText to display the number of wins for both players
  // - [ ] when should this be called?
    // - [ ] eventually, on page load
    // - [ ] for now, when the win happens, in announceGameEnd

// - [ ] add timeout to start new game

// - [ ] adjust CSS sizing - too big when in full screen mode
