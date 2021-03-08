// GLOBAL VARIABLES 🌐
var game = new Game();

// QUERY SELECTORS 🕵️‍♀️
var bttnStartGame = document.getElementById("bttnStartGame");
var turnLine = document.getElementById("turnLine");
var playerLine = document.getElementById("playerLine");

var boxA1 = document.getElementById("a1");
var boxB1 = document.getElementById("b1");
var boxC1 = document.getElementById("c1");
var boxA2 = document.getElementById("a2");
var boxB2 = document.getElementById("b2");
var boxC2 = document.getElementById("c2");
var boxA3 = document.getElementById("a3");
var boxB3 = document.getElementById("b3");
var boxC3 = document.getElementById("c3");

// EVENT LISTENERS 🎧
// The algorithm:
// - Put a single handler on a container
// - In the handler - check the source element using event.target
// - If the event happened inside an element that interests us, then handle the event
// bttnStartGame.addEventListener("click", game.startGame);
bttnStartGame.addEventListener("click", startGamePlay);


// GAME PLAY 🤾‍♀️
// - when the start button is clicked, game.startGame will run
// - a random player will be generated
// - [ ] create a notification that will alert the generated player to take a turn!

function startGamePlay() {
  game.startGame();
  bttnStartGame.classList.add("hidden"); // hides the start game button
  turnLine.classList.remove("hidden"); // unhides the turnLine
  playerLine.classList.remove("hidden"); // unhides the playerLine
  playerLine.innerText = game.currentPlayer.token; // displays current player token
}

// 🤷‍♀️VARIABLES I MIGHT WANT TO USE LATER
// var clickedBox = event.target.closest('.box');
// var clickedBox = event.target.id;
