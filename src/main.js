// GLOBAL VARIABLES 🌐
var game = new Game();

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
// The algorithm:
// - Put a single handler on a container
// - In the handler - check the source element using event.target
// - If the event happened inside an element that interests us, then handle the event
