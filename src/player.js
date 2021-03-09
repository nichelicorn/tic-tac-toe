class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    this.wins++;
    var p1WinsToStore = game.player1;
    var p2WinsToStore = game.player2;
    var stringifiedP1WinsToStore = JSON.stringify(p1WinsToStore);
    var stringifiedP2WinsToStore = JSON.stringify(p2WinsToStore);
    localStorage.setItem("player1Object", stringifiedP1WinsToStore);
    localStorage.setItem("player2Object", stringifiedP2WinsToStore);
  }

  retrieveWinsFromStorage() {
    // this method will retrieve Player object from loaclStorage
    var retrievedP1Wins = localStorage.getItem("player1Object");
    var retrievedP2Wins = localStorage.getItem("player2Object");
    var parsedP1Wins = JSON.parse(retrievedP1Wins);
    var parsedP2Wins = JSON.parse(retrievedP2Wins);
  }
}
