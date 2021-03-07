class Game {
  constructor() {
    this.player1 = new Player(1, "⚔︎");
    this.player2 = new Player(0, "☮︎");
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3];
    this.currentPlayer = undefined;
    // this.currentGameBoard = [];
    // this.currentGameBoard = ["a1", "b1", "c1", "a2", "b2", "c2", "a3", "b3", "c3"],
    this.winningCombos = [
      {win: [this.gameBoard[0], this.gameBoard[1], this.gameBoard[2]], isWinner: false}, //this doesn't get reassigned when the clicks happen
      {win: ["a2", "b2", "c2"], isWinner: false},
      {win: ["a3", "b3", "c3"], isWinner: false},
      {win: ["a1", "a2", "a3"], isWinner: false},
      {win: ["b1", "b2", "b3"], isWinner: false},
      {win: ["c1", "c2", "c3"], isWinner: false},
      {win: ["a1", "b2", "c3"], isWinner: false},
      {win: ["a3", "b2", "c1"], isWinner: false}
    ];
    // this.winningCombos = [
    //   {row: ["a1", "b1", "c1"], isWinner: false},
    //   {row: ["a2", "b2", "c2"], isWinner: false},
    //   {row: ["a3", "b3", "c3"], isWinner: false},
    //   {row: ["a1", "a2", "a3"], isWinner: false},
    //   {row: ["b1", "b2", "b3"], isWinner: false},
    //   {row: ["c1", "c2", "c3"], isWinner: false},
    //   {row: ["a1", "b2", "c3"], isWinner: false},
    //   {row: ["a3", "b2", "c1"], isWinner: false}
    // ];
  }

  startGame() { // add a button to start the game?
    var whoFirst = Math.floor(Math.random() * 2);
    if (whoFirst === 0) {
      this.currentPlayer = this.player2;
      console.log("player2 gets to go first!");
    } else {
      this.currentPlayer = this.player1;
      console.log("player1 gets to go first!");
    }
  }

  placeToken(clickedBox) {
    // console.log("before game.gameBoard:", game.gameBoard);
    var clickedID = clickedBox.id;
    for (var i = 0; i < this.gameBoard.length; i++) {
      var gameBoardID = this.gameBoard[i].id;
      if (clickedID === gameBoardID) {
        this.gameBoard.splice(i, 1, this.currentPlayer.token);
        // spliceWin(clickedID)
        // this.currentGameBoard.splice(i, 1, clickedID + this.currentPlayer.token); splices in the id as a1TOKEN, b3TOKEN, etc
        // this.currentGameBoard.splice(i, 1, this.currentPlayer.token); // is this.currentGameBoard even necessary??
      }
    }
    // console.log("after splice this.gameBoard:", this.gameBoard);
  }

  spliceWin(clickedID) {
    

    // want this method to replace the value in winningCombos.row with the clickedID if there is a box id match
    // splice this.currentPlayer.token into the row index matching the clickedID
  }

  takeTurns() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    }
    console.log("the current player is:", this.currentPlayer);
  }

  checkForWinningCombos() {
    // if this.winningCombos contains an array of three of the same tokens, return a winner
  }

  playFiveRounds() {
    this.startGame();
    this.placeToken(boxA1);
    this.takeTurns();
    this.placeToken(boxB1);
    this.takeTurns();
    this.placeToken(boxA2);
    this.takeTurns();
    this.placeToken(boxB2);
    this.takeTurns();
    this.placeToken(boxA3);
    this.takeTurns();
    this.checkForWinningCombos();
  }

}


// 🏁 WHAT IS NEXT?
// A way to check the Game’s board data for win conditions
// - 3) A row of three tokens in any direction (horizontal, vertical, diagonal) results in a win!
  // √ create an array that holds all possible wins (this is an array of arrays; each data point will contain three box id's)

// - 4) A draw is also possible, and results when neither player is able to make a row of three tokens
  // if none of the arrays above are possible, the game is a draw and no one wins

// - 17) Board now has 5 tokens placed, and there is a possiblity for a win!
  // a win is only possible once there are 5 tokens placed on the gameBoard
  // a win is only possible once the currentGameBoard has 5+ tokens

// - 18) Evaluate location of first players tokens
  // check currentGameBoard against gameBoard
  // map the currentGameBoard's tokens onto the currentGameBoard

// - 19) If a row of 3 has been created, alert that first player has won!
  // if one of the possible wins is detected, alert that the player whose tokens match the possible win has won!
  // seems like this should only need to evaluate the currentPlayer

// - 20) Then add a win to first player's win count
// add one to currentPlayer's count 



// 🗺 CURRENT PROGRESS
// 1) can instantiate new game
//   1a) var game = new Game();
//       logging game returns the game object
// 2) can start a new game
//   2a) game.startGame();
//       logs the currentPlayer
//   2b) method can be invoked again, and a new game will start:
//       resets the currentPlayer and logs the currentPlayer
// 3) can place a token
  // 3a) game.placeToken(clickedBox);
  //     splices the gameBoard box matching the clickedBox and replaces with currentPlayer's token
// 4) can switch to next player
  // 4a) game.takeTurns();
  //     updates currentPlayer to be the opposite player


// ⚔️☮️ Tic Tac Toe - How to play

// within the Game class, do these things:


// - 7) The box cannot be marked again once a marker has been placed there
// - 8) DOM ! METHOD game.placeToken() IN COMBINATION WITH game.takeTurns() WILL UPDATE THE DATA MODEL FOR THIS PIECE ! There will be a slight delay, then the next player is alerted to take their turn
// after the click splices the gameBoard, the currentPlayer should be switched to the other player
// - 9) √ The next player chooses a square on the board and !DOM!!!!!!!!! clicks to mark their square
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
// √ invoke startGame(); the player whose id is returned goes first
// - √ 6) The first player chooses a square on the board and clicks to mark the square with their token
// what should happen in this method?
// √ click happens
// √ which box was clicked?
// √ the box should be removed from the gameBoard
// should the box be reassigned the currentPlayer's markedBoxes? - this doesn't exist yet; not sure yet how I will approach the checkForWin method
// √ that box should be marked with the currentPlayer's token
// √ replace the box id with the token?
// √ switch turns


// PREVIOUS VERSIONS OF THIS.winningCombos
// this.winningCombos = [
  //   ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"], ["a1", "b2", "c3"], ["a3", "b2", "c1"]
  // ];
  // this.winningCombos = [
    //   [a1, b1, c1], [a2, b2, c2], [a3, b3, c3],
    //   [a1, a2, a3], [b1, b2, b3], [c1, c2, c3],
    //   [a1, b2, c3], [a3, b2, c1]
    // ]; // items in winningCombos are returns as arrays of elements
    // currentGameBoard is returned as an array of strings
    // change winningCombos to strings??



    // PREVIOUS CODE IN checkForWinningCombos
    // if (this.winningCombos.includes(this.currentGameBoard)) { this is false
      // if ()
      //   console.log("the if on 52 is true!");
      // } else {
        //   console.log("that if on 52 is false");
        // }
        // if (any of the winningCombos are present in the currentGameBoard) {

          // find out which player's tokens match the winningCombos value;
          // add one to playerN's win count
          // return playerN is the winner!
          // }



// FIRST ITERATION OF checkForWinningCombos
          // checkForWinningCombos() {
            //     for (var i = 0; i < this.currentGameBoard.length; i++) {
              //       var piece = this.currentGameBoard[i];
              //       console.log("piece i:", piece); // logs each
              //       for (var w = 0; w < this.winningCombos.length; w++) { // IF THIS LOOP COMES, FIRST IT DOESN'T READ ANYTHING
                //         console.log("winningCombos[i]:", this.winningCombos[i]); // returns the entire winningCombos array, an array of objects // returns undefined ... huh ... what if this was inside the currentGameBoard for loop?
                //       }
                //     }
                //   }
                // console.log("winningCombos[i].row:", this.winningCombos[i].row); // returns the list of row arrays from the winningCombos objects; the log is reading piece a1SWORD and the next 8 rows are all the same winningCombo[i] array; continues on through all the currentGameBoard pieces
                // ONLY COMPARING THE FIRST PIECE TO THE FIRST ARRAY, THE SECOND PIECE TO THE SECOND ARRAY, ETC...

                // if (piece.length >= 3 { // maybe I shouldn't get ahead of myself... what is being returned for the winningCombos[i]?
                  //   replace winningCombos[i]
                  // })

                  // if (piece.includes(this.currentPlayer.token)) { // this if statement isn't returning what I'm looking for - if the piece (this.currentGameBoard[i]) includes the current player token
                    //   console.log("the piece does include");
                    // first loop looks at this.winningCombo.length √
                    // for each [i], do =>
                    // second loop - looks @ this.currentGameBoard √
                    // for each [i], do =>
                    // look @ this.winningCombos[i], do =>
                    // if this.currentGameBoard[i].id is found in this.winningCombos[i]
                    // reassign this.winningCombos[i].row to be an array of the tokens found in this.currentGameBoard

                    // if the token in currentGameBoard is found in winningCombos, switch out that value with the current player's tokens
                    // i think this might need to happen earlier

                    // on click, assign the current player's token to a placeholder value
                    // the placeholder value could then reassign the values contained within the winningCombos with the current player's token

                    // first attempt at this method - it's not currently working as desired
                    // try again, and this time look into the arrays in the opposite order
                    //switch the count in the winningCombos objects to a boolean
                    // then, if all three boxes have matching token values (contained within this.currentGameBoard), the player whose token matches the winningCombo is the winner!

                    // for (var i = 0; i < this.currentGameBoard.length; i++) {
                      //   console.log("currentGameBoard value i:", this.currentGameBoard[i]); // logs the box id
                      //   // var piece = this.currentGameBoard[i];
                      //   // if (piece.includes(this.currentPlayer.token)) { // this if statement isn't returning what I'm looking for - if the piece (this.currentGameBoard[i]) includes the current player token
                        //   //   console.log("the piece does include");
                        //     for (var w = 0; w < this.winningCombos.length; w++) { // none of these counts udpated with the if statement above
                          // console.log("in the win loop"); // gets into the loop, then nothing else is happening here, so, it skips down to line 56
                          //       console.log("in the win loop");
                          //       if (this.winningCombos[w].row.includes(this.currentGameBoard[i])) {
                            //         this.winningCombos[w].count++; // this only identifies if the array has a count of three - this doesn't identify which pieces occupy the spaces
                            //       // }
                            //     }
                            //   }
                            //   // if the i in currentGameBoard is found in any of the arrays in winningCombos,
                            // }
                            // what am I trying to do now??
                            // if all the tokens are the same, add 3 to the winningCombos.count?
                            // if all the tokens in the winningCombos[i] are the same, return that as the winningCombo!
                            // alert which player's token has won
                            // if the winningCombos.includes three of the same token, that player has won!!


                            // - the winningCombos are being incremented if the space is occupied
                            // - the token occupying the space is not being identified
                            // - next step is to identify if the winningCombos are only occupied by the same kind of token




                            // if
                            // if (this.winningCombos[w].count >= 3) { // this only identifies if the array has a count of three - this doesn't identify which pieces occupy the spaces
                              //   // console.log("this.currentPlayer:", this.currentPlayer);
                              //   console.log(`${this.currentPlayer.token} is the winner!`);
                              // }
                              // tag that currentGameBoard[i] as a possibleWin
                              // if the currentGameBoard[i] has 3 tags, that array is a winner!
                              // add a count = 0 to the winning combos?
                              // in this case they would have to be objects, squares = "square strings", count = 0
                              // then
                              // if the i in currentGameBoard is present in any of the winningCombos objects {
                                //  obj.count += 1
                                // if the obj.count of any winningCombos array === 3 {
                                  //  run the function that tests for a winners
                                  //  console.log("this one is a winner!", winningCombos[i]);
                                  // }
                                  // }
