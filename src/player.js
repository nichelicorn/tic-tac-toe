class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    this.wins++;
    // console.log("player1?", game.player1);
    // console.log("player2?", game.player2);

    // var winsToStore = this.Player; // logs undefined
    var p1WinsToStore = game.player1;
    var p2WinsToStore = game.player2;
    // console.log("localStorage...winsToStore:", winsToStore); // logs the currentPlayer object
    // console.log("winsToStore:", winsToStore);
    var stringifiedP1WinsToStore = JSON.stringify(p1WinsToStore);
    var stringifiedP2WinsToStore = JSON.stringify(p2WinsToStore);
    // console.log("stringifiedWinsToStore:", stringifiedWinsToStore);
    localStorage.setItem("winner1Object", stringifiedP1WinsToStore);
    localStorage.setItem("winner2Object", stringifiedP2WinsToStore);
  }

  retrieveWinsFromStorage() {
    // this method will retrieve Player object from loaclStorage
  }
}
