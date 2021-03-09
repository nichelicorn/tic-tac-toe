class Game {
  constructor() {
    this.player1 = new Player(1, "X");
    this.player2 = new Player(0, "O");
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3];
    // this.gameBoard = ["a1", "b1", "c1", "a2", "b2", "c2", "a3", "b3", "c3"];
    this.currentPlayer = undefined;
    this.winningCombos = [
      {win: ["a1", "b1", "c1"], isWinner: false},
      {win: ["a2", "b2", "c2"], isWinner: false},
      {win: ["a3", "b3", "c3"], isWinner: false},
      {win: ["a1", "a2", "a3"], isWinner: false},
      {win: ["b1", "b2", "b3"], isWinner: false},
      {win: ["c1", "c2", "c3"], isWinner: false},
      {win: ["a1", "b2", "c3"], isWinner: false},
      {win: ["a3", "b2", "c1"], isWinner: false}
    ];
    this.hasWinner = false;
    this.playCount = 0;
  }

  startGame() {
    var whoFirst = Math.floor(Math.random() * 2);
    if (whoFirst === 0) {
      this.currentPlayer = this.player2;
      // console.log("O gets to go first!");
    } else {
      this.currentPlayer = this.player1;
      // console.log("X gets to go first!");
    }
  }

  takeTurns() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      // console.log("It's player 2's turn: O");
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
      // console.log("It's player 1's turn: X");
    }
  }

  placeToken(clickedBox) {
    // console.log("clickedBox:", clickedBox);
    this.playCount++;
    var clickedID = clickedBox.id;
    // console.log("clickedID:", clickedID);
    for (var i = 0; i < this.gameBoard.length; i++) {
      // console.log("gameBoard[i]:", this.gameBoard[i]);
      var gameBoardID = this.gameBoard[i].id;
      // console.log("gameBoardID:", gameBoardID); //gameBoardID is now undefined
      if (clickedID === gameBoardID) {
        this.gameBoard.splice(i, 1, this.currentPlayer.token);
        this.spliceWin(clickedID)
      }
    }
  }

  spliceWin(clickedID) {
    // console.log("is spliceWin working now?");
    for (var i = 0; i < this.winningCombos.length; i++) {
      var theWinCombos = this.winningCombos[i];
      // console.log("theWinCombos:", theWinCombos);
      var theWinArray = this.winningCombos[i].win;
      // console.log("theWinArray:", theWinArray);
      if (theWinArray.includes(clickedID)) {
        var marker = theWinArray.indexOf(clickedID);
        theWinArray.splice(marker, 1, this.currentPlayer.token);
        this.updateWinCondition(theWinArray);
      }
    }
  }

  updateWinCondition(theWinArray) {
    for (var i = 0; i < this.winningCombos.length; i++) {
      if (theWinArray[0] === theWinArray[1] && theWinArray[1] === theWinArray[2]) {
        if (theWinArray === this.winningCombos[i].win) {
          this.winningCombos[i].isWinner = true;
          this.hasWinner = true;
          }
        if (this.winningCombos[i].isWinner) {
          this.currentPlayer.saveWinsToStorage();
          console.log(`${this.currentPlayer.token} is the winner!`);
        }
      }
      if (this.playCount === 9 && !this.winningCombos[i].isWinner){
      }
    }
  }

  resetBoard() {
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3];
    // this.gameBoard = ["a1", "b1", "c1", "a2", "b2", "c2", "a3", "b3", "c3"];
    this.currentPlayer = undefined;
    this.winningCombos = [
      {win: ["a1", "b1", "c1"], isWinner: false},
      {win: ["a2", "b2", "c2"], isWinner: false},
      {win: ["a3", "b3", "c3"], isWinner: false},
      {win: ["a1", "a2", "a3"], isWinner: false},
      {win: ["b1", "b2", "b3"], isWinner: false},
      {win: ["c1", "c2", "c3"], isWinner: false},
      {win: ["a1", "b2", "c3"], isWinner: false},
      {win: ["a3", "b2", "c1"], isWinner: false}
    ];
    this.hasWinner = false;
    this.playCount = 0;
    // console.log("Next game starts in 1000");
    // setTimeout(nextGame, 1000);
  }
}
