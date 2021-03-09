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

function markTheBoard(event) {
  var clickedBox = event.target.closest(".box");
  game.placeToken(clickedBox);
  clickedBox.innerText = game.currentPlayer.token;
  clickedBox.classList.add("no-click");
  if (!game.hasWinner && game.playCount < 9) {
    game.takeTurns();
    playerLine.innerText = game.currentPlayer.token;
  }
  announceGameEnd();
}

function announceGameEnd() {
  if (game.playCount >= 5 && game.hasWinner) {
    playerLine.innerText = `${game.currentPlayer.token} is the Winner!`;
    gameEndConditions();
    // turnLine.classList.add("hidden"); // occurs 2x - line 37, 43
    // boardBckgrnd.classList.add("no-click"); // occurs 2x, line 39, 45
    // displayWins(); // occurs 2x, line 40, 46
    // setTimeout(timeoutNextGame, 7000); // occurs 2x, line 41, 47
  } else if (game.playCount >= 9 && !game.hasWinner) {
    playerLine.innerText = "This game is a draw. Nobody won!";
    gameEndConditions();
    // turnLine.classList.add("hidden"); // occurs 2x - line 37, 43
    // boardBckgrnd.classList.add("no-click"); // occurs 2x, line 39, 45
    // displayWins(); // occurs 2x, line 40, 46
    // setTimeout(timeoutNextGame, 7000); // occurs 2x, line 41, 47
  }
}

function gameEndConditions() {
  turnLine.classList.add("hidden");
  boardBckgrnd.classList.add("no-click");
  displayWins();
  setTimeout(timeoutNextGame, 7000);
}

function displayWins() {
  var oWinCount = game.player2.wins;
  var xWinCount = game.player1.wins;
  var oWins = document.getElementById("oWins");
  var xWins = document.getElementById("xWins");
  xWins.innerText = `${xWinCount}!`;
  oWins.innerText = `${oWinCount}!`;
}

function timeoutNextGame() { // switched the order of line 70/71 to test fcn on line 90
  resetGameBoard();
  game.resetBoard();
}

function resetGameBoard() { // THIS FUNCTION WORKS!!! IF THE ATTEMPT ON LINE 90 DOESN'T WORK, YOU CAN STILL GO WITH THIS ONE 💖
  // a1.innerText = ""; // can I use a for loop to reset this?
  // b1.innerText = "";
  // c1.innerText = "";
  // a2.innerText = "";
  // b2.innerText = "";
  // c2.innerText = "";
  // a3.innerText = "";
  // b3.innerText = "";
  // c3.innerText = "";
  resetInnerText();
  a1.classList.remove("no-click");
  b1.classList.remove("no-click");
  c1.classList.remove("no-click");
  a2.classList.remove("no-click");
  b2.classList.remove("no-click");
  c2.classList.remove("no-click");
  a3.classList.remove("no-click");
  b3.classList.remove("no-click");
  c3.classList.remove("no-click");
  playerLine.classList.add("hidden");
  bttnStartGame.classList.remove("hidden");
  boardBckgrnd.classList.remove("no-click");
}

function resetInnerText() {
  a1.innerText = ""; // can I use a for loop to reset this?
  b1.innerText = "";
  c1.innerText = "";
  a2.innerText = "";
  b2.innerText = "";
  c2.innerText = "";
  a3.innerText = "";
  b3.innerText = "";
  c3.innerText = "";
}

function displayStoredWins() {
  if (localStorage.length > 0) {
    game.checkForStoredWins();
    displayWins();
  }
}

// 🏁 WHAT IS NEXT?

// - [ ] fix bux that allows two clicks on the same box
// - √ refactor js
  // - √ looks like there is plenty of opportunity for helper functions in the main.js
// - [ ] adjust CSS sizing - too big when in full screen mode
// - [ ] review css for refactoring opportunities
// - [ ] CSS fun!!
  // - [ ] Ahsoka/Anakin theme
  // - [ ] animated bars instead of stationary background (lightsabres?)
