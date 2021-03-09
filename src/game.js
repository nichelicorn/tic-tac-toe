class Game {
  constructor() {
    this.player1 = new Player(1, "X");
    this.player2 = new Player(0, "O");
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3];
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
    } else {
      this.currentPlayer = this.player1;
    }
  }

  takeTurns() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    }
  }

  placeToken(clickedBox) {
    var clickedID = clickedBox.id;
    for (var i = 0; i < this.gameBoard.length; i++) {
      var gameBoardID = this.gameBoard[i].id;
      if (clickedID === gameBoardID) {
        this.gameBoard.splice(i, 1, this.currentPlayer.token);
        this.spliceWin(clickedID);
        this.playCount++;
        console.log("playCount:", this.playCount);
      }
    }
  }

  spliceWin(clickedID) {
    for (var i = 0; i < this.winningCombos.length; i++) {
      var theWinCombos = this.winningCombos[i];
      var theWinArray = this.winningCombos[i].win;
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
        }
      }
    }
  }

  resetBoard() {
    this.gameBoard = [a1, b1, c1, a2, b2, c2, a3, b3, c3];
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

  checkForStoredWins() {
    this.player1.getWinsFromStorage();
    this.player2.getWinsFromStorage();
  }
}
