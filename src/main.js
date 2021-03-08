// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd");
// var bttnNewGame = document.getElementById("bttnNewGame");
var bttnStartGame = document.getElementById("bttnStartGame");
var oWins = document.getElementById("oWins");
var playerLine = document.getElementById("playerLine");
var turnLine = document.getElementById("turnLine");
var xWins = document.getElementById("xWins");

// EVENT LISTENERS 🎧
boardBckgrnd.addEventListener("click", markTheBoard);
// bttnNewGame.addEventListener("click", startGamePlay);
bttnStartGame.addEventListener("click", startGamePlay);

// GAME FUNCTIONS 🎴
function startGamePlay() {
  game.startGame();
  bttnStartGame.classList.add("hidden");
  // bttnNewGame.classList.add("hidden");
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
    // resetGameBoard();
  } else if (game.playCount >= 9 && !game.hasWinner) {
    console.log("nobody won");
    playerLine.innerText = "This game is a draw. Nobody won!";
    boardBckgrnd.classList.add("no-click");
    displayWins();
    // resetGameBoard();
  }
}

function displayWins() {
  var xWinCount = game.player1.wins;
  var oWinCount = game.player2.wins;
  xWins.innerText = `${xWinCount}!`;
  oWins.innerText = `${oWinCount}!`;
}

function resetGameBoard() {
  // reset game board once the game has ended
  // Game class data will be reassigned
  game.resetBoard(); // gameBoard data is reset; player wins have persisted
  // reset visuals on gameBoard
  // boardBckgrnd.innerText = ""; NO - this removes the entire grid
  boardBckgrnd.classList.remove("no-click");
}


// 🏁 WHAT IS NEXT?
// - [ ] Automatically reset the game board to allow for a new game to be played after the previous game is won
// - [ ] add timeout to start new game



// - √ display player data in the sidebars
// - √ target the player wins in both sidebars
// - √ update innerText to display the number of wins for both players
// - [ ] when should this be called?
// - [ ] eventually, on page load
// - √ for now, when the win happens, in announceGameEnd

// - [ ] adjust CSS sizing - too big when in full screen mode
