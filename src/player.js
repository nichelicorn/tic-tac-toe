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

  getWinsFromStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      var retrievedP1 = localStorage.getItem("player1Object");
      var retrievedP2 = localStorage.getItem("player2Object");
      var parsedP1Wins = JSON.parse(retrievedP1);
      var parsedP2Wins = JSON.parse(retrievedP2);
      if (parsedP1Wins.id === 1 && this.id === 1) {
        this.wins = parsedP1Wins.wins;
      } else if (parsedP2Wins.id === 0 && this.id === 0) {
        this.wins = parsedP2Wins.wins;
      }
    }
  }
}
