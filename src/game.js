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
      // console.log("player2 gets to go first");
      // console.log("the currentPlayer:", this.currentPlayer);
    } else {
      this.currentPlayer = this.player1;
      // console.log("player1 gets to go first");
      // console.log("the currentPlayer:", this.currentPlayer);
    }
  }

  // invoke startGame(); the player whose id is returned goes first
  // from thereon, this function should keep track of whose turn it is
  takeTurn(event) {
    // console.log("click", event.target.id); // logs the click event's id!
    var clickedBox = event.target.id;
    console.log("clicked box:", clickedBox); // logs the box id
    console.log("gameBoard:", this.gameBoard); // this.gameBoard is undefined
    // iterate through gameBoard array
    // for (var i = 0; i < this.gameBoard.length; i++) {
      // console.log("box:", this.gameBoard[i]);
    // }
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
  }
  // the playerMarkers array will be cross-referenced to the currentGameBoard to discover if/when they have a win??
}

// Tic Tac Toe - How to play

// within the Game class, do these things:

// - 3) A row of three tokens in any direction (horizontal, vertical, diagonal) results in a win!
// - 4) A draw is also possible, and results when neither player is able to make a row of three tokens

// - 6) The first player chooses a square on the board and clicks to mark the square with their token
// - 7) The token cannot be removed once placed!
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
