// GLOBAL VARIABLES 🌐
var newGame = new Game();

// QUERY SELECTORS 🕵️‍♀️
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
// boxA1.addEventListener("click", Game.placeToken); // this doesn't do anything! can't seem to read Game.placeToken
boxA1.addEventListener("click", newGame.placeToken); // this works though...
// boxB1.addEventListener("click", newGame.placeToken);
// boxC1.addEventListener("click", newGame.placeToken);
// boxA2.addEventListener("click", newGame.placeToken);
// boxB2.addEventListener("click", newGame.placeToken);
// boxC2.addEventListener("click", newGame.placeToken);
// boxA3.addEventListener("click", newGame.placeToken);
// boxB3.addEventListener("click", newGame.placeToken);
// boxC3.addEventListener("click", newGame.placeToken);
