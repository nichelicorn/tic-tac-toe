// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var boardBckgrnd = document.getElementById("boardBckgrnd");
var bttnStartGame = document.getElementById("bttnStartGame");
var playerLine = document.getElementById("playerLine");
var turnLine = document.getElementById("turnLine");


// var boxA1 = document.getElementById("a1");
// var boxB1 = document.getElementById("b1");
// var boxC1 = document.getElementById("c1");
// var boxA2 = document.getElementById("a2");
// var boxB2 = document.getElementById("b2");
// var boxC2 = document.getElementById("c2");
// var boxA3 = document.getElementById("a3");
// var boxB3 = document.getElementById("b3");
// var boxC3 = document.getElementById("c3");

// EVENT LISTENERS 🎧
// The algorithm:
// - Put a single handler on a container
// - In the handler - check the source element using event.target
// - If the event happened inside an element that interests us, then handle the event
boardBckgrnd.addEventListener("click", markTheBoard);
// bttnStartGame.addEventListener("click", game.startGame);
bttnStartGame.addEventListener("click", startGamePlay);


// GAME PLAY 🤾‍♀️
// - √ when the start button is clicked, game.startGame will run
// - √ a random player will be generated
// - √ create a notification that will alert the generated player to take a turn!
// - NEXT when a box is clicked:
    // - need an event listener for the boxes
      // - √ TARGETED boardBckgrnd - do I want to target each individual box, or the gameboard background as a whole?
      // - √ it seems best to target the whole board, since that is NOT re-created in the startGamePlay function
    // - √ when a box is clicked, that box becomes the clickedBox passed into placeToken (hopefully 🤞) √ I think I will need to create a variable for this that can be passed as a parameter into placeToken(clickedBox)
  // - √ game.placeToken()
  // - √ display currentPlayer.token
  // - √ game.takeTurns();
  // - √ playerLine.innerText should be updated with new currentPlayer

function startGamePlay() {
  game.startGame();
  bttnStartGame.classList.add("hidden"); // hides the start game button
  turnLine.classList.remove("hidden"); // unhides the turnLine
  playerLine.classList.remove("hidden"); // unhides the playerLine
  playerLine.innerText = game.currentPlayer.token; // displays current player token
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
