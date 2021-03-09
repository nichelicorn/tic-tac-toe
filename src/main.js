// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd");
var bttnStartGame = document.getElementById("bttnStartGame");
var playerLine = document.getElementById("playerLine");
var turnLine = document.getElementById("turnLine");

// EVENT LISTENERS 🎧
window.addEventListener("load", displayStoredWins);
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
    setTimeout(timeoutNextGame, 7000);
  } else if (game.playCount >= 9 && !game.hasWinner) {
    turnLine.classList.add("hidden");
    playerLine.innerText = "This game is a draw. Nobody won!";
    boardBckgrnd.classList.add("no-click");
    displayWins();
    setTimeout(timeoutNextGame, 7000);
  }
}

function displayWins() {
  var oWinCount = game.player2.wins;
  var xWinCount = game.player1.wins;
  var oWins = document.getElementById("oWins");
  var xWins = document.getElementById("xWins");
  xWins.innerText = `${xWinCount}!`;
  oWins.innerText = `${oWinCount}!`;
}

function timeoutNextGame() {
  game.resetBoard();
  resetGameBoard();
}

function resetGameBoard() {
  a1.innerText = ""; // can I use a for loop to reset this?
  b1.innerText = "";
  c1.innerText = "";
  a2.innerText = "";
  b2.innerText = "";
  c2.innerText = "";
  a3.innerText = "";
  b3.innerText = "";
  c3.innerText = "";
  playerLine.classList.add("hidden");
  bttnStartGame.classList.remove("hidden");
  boardBckgrnd.classList.remove("no-click");
  // clickedID.classList.remove("no-click"); // if I used a for loop on the box.innerText, could something similar make this property usable in markTheBoard() as well?
}

function displayStoredWins() {
  if (localStorage.length > 0) {
    game.checkForStoredWins();
    displayWins();
  }
}

// 🏁 WHAT IS NEXT?

// - [ ] refactor
  // - [ ] looks like there is plenty of opportunity for helper functions in the main.js
  // - [ ] review css for refactoring opportunities
// - [ ] adjust CSS sizing - too big when in full screen mode
// - [ ] try to fix bux that allows two clicks on the same box
// - [ ] CSS fun!!
  // - [ ] Ahsoka/Anakin theme
  // - [ ] animated bars instead of stationary background (lightsabres?)
