class Game {
  constructor() {
    this.player1 = new Player(1, "⚔︎");
    this.player2 = new Player(0, "☮︎");
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3];
    this.currentPlayer = undefined;
    this.currentGameBoard = [];
  }

  startGame() { // add a button to start the game?
    var whoFirst = Math.floor(Math.random() * 2);
    if (whoFirst === 0) {
      this.currentPlayer = this.player2;
      console.log("player2 gets to go first");
      console.log("the currentPlayer:", this.currentPlayer);
    } else {
      this.currentPlayer = this.player1;
      console.log("player1 gets to go first");
      console.log("the currentPlayer:", this.currentPlayer);
    }
  }

  placeToken(event) { // this will need to take in the event to identify the clicked box's id
    // use the id to splice?
    console.log("click", event.target.id); // logs the click event's id!
    // if (the currentplayer's token is X) {
    //   splice that box from the gameBoard and replace with player1's token
    // } else if (the currentPlayer's token is O) {
    //   splice that box from the gameBoard and replace with player2's token
    // }
  }
}

// 🗺 CURRENT PROGRESS
// 1) can instantiate new game
//   1a) var newGame = new Game();
//       logging newGame returns the newGame object
// 2) can start a new game
//   2a) newGame.startGame();
//       logs the currentPlayer
//   2b) method can be invoked again, and a new game will start:
//       resets the currentPlayer and logs the currentPlayer

// 🏁 WHAT IS NEXT?
// √ invoke startGame(); the player whose id is returned goes first
// - 6) The first player chooses a square on the board and clicks to mark the square with their token
  // what should happen in this method?
  // click happens
  // which box was clicked?
  // the box should be removed from the gameBoard
  // should the box be reassigned the currentPlayer's markedBoxes? - this doesn't exist yet; not sure yet how I will approach the checkForWin method
  // that box should be marked with the currentPlayer's token
  // replace the box id with the token?


// - 7) The token cannot be removed once placed!























  // THIS COMMENTED OUT STUFF IS FROM THE FIRST ATTEMPT AT THE takeTurn FUNCTION - WENT OFF IN A WEIRD DIRECTION YESTERDAY AND WANT TO START FRESH! 🌤
  // takeTurn(event) {
    // console.log("this.currentPlayer:", this.currentPlayer);
    // console.log("newGame.currentPlayer:", newGame.currentPlayer);
    // console.log("newGame.currentPlayer.id:", newGame.currentPlayer.id);
    // var clickedBox = event.target.id;
    // if (clickedBox === this.currentPlayer.id)
    // I want this function to switch between player1 and player2
    // if (this.currentPlayer === this.player2) {
      //   this.currentPlayer = this.player1;
      //
      // } else if (this.currentPlayer === this.player1) {
        //   this.currentPlayer = this.player2;
        // }
    // console.log("clicked box:", clickedBox); // logs the box id
    // for (var i = 0; i < newGame.gameBoard.length; i++) {
      // console.log("box:", newGame.gameBoard[i]); // logs all the boxes
    // console.log("gameBoard?", newGame.gameBoard); ///AUGH!!! this is logging the value of the newGame game board (the random value assigned to the game used for the console. Why isn't this.gameBoard working???)
    // console.log("gameBoard:", this.gameBoard); // this.gameBoard is undefined
    // iterate through gameBoard array
    // remove the item that matches the id returned
    // push that item into the player's array
    //I'm getting the clicked box - I know that I want to remove that from the gameBoard array
    // do I also want to move that into a player array? seems like that might be too much?
    // though this would follow the logic of then checking that player's array against the WINS arrays

    // this.currentPlayer will click on a box
      // use the variables that select the boxes
      // add the box id to the playerMarkers array
      // that box will be added to their playerMarkers array??
      // (DOM) if the box is clicked, add a token to the innerText
      // (DOM) that box will display their token
  // the playerMarkers array will be cross-referenced to the currentGameBoard to discover if/when they have a win??


// Tic Tac Toe - How to play

// within the Game class, do these things:

// - 3) A row of three tokens in any direction (horizontal, vertical, diagonal) results in a win!
// - 4) A draw is also possible, and results when neither player is able to make a row of three tokens

// - 8) There will be a slight delay, then the next player is alerted to take their turn
// - 9) The next player chooses a square on the board and clicks to mark their square
// - the board might now look something like this:
// ___|_X_|___
// ___|___|___
// _O_|___|___
// - 10) NO WINS POSSIBLE AT THIS STAGE
// - 11) First player takes another turn
// - 12) Next player takes another turn
// - 13) Board now has four tokens placed
// _X_|_X_|_O_
// ___|___|___
// _O_|___|___
// - 14) NO WINS POSSIBLE AT THIS STAGE
// - 15) A win is not possible for an individual player until three of their tokens have been placed
// - 16) First player takes another turn
// - 17) Board now has 5 tokens placed, and there is a possiblity for a win!
// - 18) Evaluate location of first players tokens
// - 19) If a row of 3 has been created, alert that first player has won!
// - 20) Then add a win to first player's win count
// - Board looks like this, though:
// _X_|_X_|_O_
// ___|_X_|___
// _O_|___|___
// - 21) Next player takes another turn
// - 22) Check board again for a win. If a row of 3 has been created, alert that next player has won!
// - 23) then add a win to next player's win count
// - Board looks like this, though:
// _X_|_X_|_O_
// ___|_X_|___
// _O_|___|_O____
// - 24) First player takes another turn
// - 25) Did first player win?
// - No:
// _X_|_X_|_O_
// ___|_X_|_X_
// _O_|___|_O___
// - Next player takes a turn
// - Did next player win?
// - No:
// _X_|_X_|_O_
// _O_|_X_|_X_
// _O_|___|_O___
// - First player's turn again
// - Win?
// - 26) Yes?
// _X_|_X_|_O_
// _O_|_X_|_X_
// _O_|_X_|_O_
// - 27) Mark line through winning rainbow
// - 28) Add win to first player's win count
// - 29) Delay, then wipe the board and restart with next player going First
// - OR
// - 29) Have a popup that asks if you want to play again


// setup:
// - 1) √ Two players, each has a different token
//   - ex: first player, token = X; next player, token = O
// - 2) √ One game board: a grid of nine squares, three high by three wide
// √ game should have two players
// √ game should have an empty game board at the start of the Game
// - 5) √ The game begins by randomly selecting the first player
// whose turn is it? should that be in the constructor, or in a separate method?
