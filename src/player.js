class Player {
  constructor(player) {
    this.id = player.name;
    this.token = player.token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    // this method will save Player object to localStorage
  }

  retrieveWinsFromStorage() {
    // this method will retrieve Player object from loaclStorage
  }
}
