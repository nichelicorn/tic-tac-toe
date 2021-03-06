class Game {
  constructor() {
    this.player1 = new Player("One", "⚔︎");
    this.player2 = new Player("Two", "☮︎");
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3]; // instantiating a new game breaks at `a1` - ReferenceError: a1 is not defined; these will need query selectors to identify the section to add the marker to
    this.currentGameBoard = [];
  }

  // whose turn is it? should that be in the constructor, or in a separate method?


}

// Tic Tac Toe - How to play

// within the Game class, do these things:

// setup:
// - 1) √ Two players, each has a different token
//   - ex: first player, token = X; next player, token = O
// - 2) √ One game board: a grid of nine squares, three high by three wide
// √ game should have two players
// √ game should have an empty game board at the start of the Game



// - 3) A row of three tokens in any direction (horizontal, vertical, diagonal) results in a win!
// - 4) A draw is also possible, and results when neither player is able to make a row of three tokens
// - 5) The game begins by randomly selecting the first player
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
