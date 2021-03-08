// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd");
var bttnStartGame = document.getElementById("bttnStartGame");
var oWins = document.getElementById("oWins");
var playerLine = document.getElementById("playerLine");
var turnLine = document.getElementById("turnLine");
var xWins = document.getElementById("xWins");
var gameBox = document.getElementById("gameBox")

var resetMsg = document.getElementById("resetMsg");

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
    setTimeout(timeoutNextGame, 7000); // timeout is working!! need to add a message that game will reset and extend time period
    // resetGameBoard();
  } else if (game.playCount >= 9 && !game.hasWinner) {
    // console.log("nobody won");
    turnLine.classList.add("hidden");
    playerLine.innerText = "This game is a draw. Nobody won!";
    boardBckgrnd.classList.add("no-click");
    displayWins();
    setTimeout(timeoutNextGame, 7000); // timeout is working!! need to add a message that game will reset and extend time period
    // resetGameBoard();

  }
}

function displayWins() {
  var xWinCount = game.player1.wins;
  var oWinCount = game.player2.wins;
  xWins.innerText = `${xWinCount}!`;
  oWins.innerText = `${oWinCount}!`;
}

function timeoutNextGame() {
  game.resetBoard(); // gameBoard data is reset; player wins have persisted
  resetGameBoard();
}

function resetGameBoard() {
  a1.innerText = "";
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
}




// 🏁 WHAT IS NEXT?



// - √ display player data in the sidebars
// - √ target the player wins in both sidebars
// - √ update innerText to display the number of wins for both players
// - [ ] when should this be called?
// - [ ] eventually, on page load
// - √ for now, when the win happens, in announceGameEnd
// - √ Automatically reset the game board to allow for a new game to be played after the previous game is won
// √ Game class data will be reassigned
// - √ add timeout to start new game

// - [ ] adjust CSS sizing - too big when in full screen mode
