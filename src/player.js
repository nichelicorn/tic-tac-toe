class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    this.wins++;
    // this method will save Player object to localStorage
  }

  retrieveWinsFromStorage() {
    // this method will retrieve Player object from loaclStorage
  }
}
