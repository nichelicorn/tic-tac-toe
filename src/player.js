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

    // var winsToStore = game.Player;
    // this method will save Player object to localStorage
  }

  retrieveWinsFromStorage() {
    // this method will retrieve Player object from loaclStorage
  }
}
