// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd"); // 1) used for a click to run markTheBoard; 2) no-click added in announceGameEnd(); 3) which is removed in resetGameBoard()
var bttnStartGame = document.getElementById("bttnStartGame"); // click starts gameplay
// var oWins = document.getElementById("oWins"); // only used in displayWins() - can this live there?
var playerLine = document.getElementById("playerLine"); // used in a lot of places for .classList.things and .innerText
var turnLine = document.getElementById("turnLine"); // used in a few places for .classList.things and .innerText
// var xWins = document.getElementById("xWins");// only used in displayWins() - can this live there?



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
  // clickedBox.classList.add("no-click"); // this breaks the game after the second round starts - any box that was marked in the first game can't be marked in the next game;
  announceGameEnd();
  if (!game.hasWinner && game.playCount <= 8) {
    game.takeTurns();
    playerLine.innerText = game.currentPlayer.token;
    // clickedBox.classList.add("no-click"); // this breaks the game after the second round starts - any box that was marked in the first game can't be marked in the next game;
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
  // clickedID.classList.remove("no-click"); // if I used a for loop on the box.innerText, could something similar make this property usable as well?
}

function displayStoredWins() {
  if (localStorage.length > 0) {
    game.checkForStoredWins();
    displayWins();
  }
}

// 🏁 WHAT IS NEXT?

// - [ ] local storage
  // - √ have player1 and player2 saved to localStorage
  // - √ if there is local storage data, retrieve and display player win count

// - √ display player data in the sidebars
// - √ target the player wins in both sidebars
// - √ update innerText to display the number of wins for both players
// - [ ] when should this be called?
// - √  eventually, on page load
// - √ for now, when the win happens, in announceGameEnd
// - √ Automatically reset the game board to allow for a new game to be played after the previous game is won
// √ Game class data will be reassigned
// - √ add timeout to start new game

// - [ ] adjust CSS sizing - too big when in full screen mode





// THESE QUERY SELECTORS WEREN'S BEING USED - TESTED AND STILL WORKS WITHOUT THESE 
// var gameBox = document.getElementById("gameBox"); // this isn't used anywhere
// var resetMsg = document.getElementById("resetMsg"); // this isn't used anywhere
