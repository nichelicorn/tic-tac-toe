# tic-tac-toe
It's tic tac toe game! Play with two or by yourself! Have fun for hours!


### HOW TO PLAY TIC TAC TOE
- Two players, each has a different token
  - ex: first player, token = X; next player, token = O
- One game board: a grid of nine squares, three high by three wide
- A row of three tokens in any direction (horizontal, vertical, diagonal) results in a win!
- A draw is also possible, and results when neither player is able to make a row of three tokens

- The game begins by randomly selecting the first player
- The first player chooses a square on the board and clicks to mark the square with their token
- The token cannot be removed once placed!
- There will be a slight delay, then the next player is alerted to take their turn
- The next player chooses a square on the board and clicks to mark their square
- the board might now look something like this:
___|_X_|___
___|___|___
_O_|___|___
- NO WINS POSSIBLE AT THIS STAGE
- First player takes another turn
- Next player takes another turn
- Board now has four tokens placed
_X_|_X_|_O_
___|___|___
_O_|___|___
- NO WINS POSSIBLE AT THIS STAGE
- A win is not possible for an individual player until three of their tokens have been placed
- First player takes another turn
- Board now has 5 tokens placed, and there is a possiblity for a win!
- Evaluate location of first players tokens
- If a row of 3 has been created, alert that first player has won!
- Then add a win to first player's win count
- Board looks like this, though:
_X_|_X_|_O_
___|_X_|___
_O_|___|___
- Next player takes another turn
- Check board again for a win. If a row of 3 has been created, alert that next player has won!
- then add a win to next player's win count
- Board looks like this, though:
_X_|_X_|_O_
___|_X_|___
_O_|___|_O____
- First player takes another turn
- Did first player win?
- No:
_X_|_X_|_O_
___|_X_|_X_
_O_|___|_O___
- Next player takes a turn
- Did next player win?
- No:
_X_|_X_|_O_
_O_|_X_|_X_
_O_|___|_O___
- First player's turn again
- Win?
- Yes?
_X_|_X_|_O_
_O_|_X_|_X_
_O_|_X_|_O_
- Mark line through winning rainbow
- Add win to first player's win count
- Delay, then wipe the board and restart with next player going First
- OR
- Have a popup that asks if you want to play again


# RESOURCES

- [FONT - Cabin Sketch](https://fonts.google.com/specimen/Cabin+Sketch?preview.text=player%20one%20%2F%20player%20two%20%2F%20X%20x%20%2F%20O%20o&preview.text_type=custom)

- [image - chalkboard background](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-OpFqYklSD-k%2FUQcCXvRs9UI%2FAAAAAAAAQs8%2FuD3Mc7RhLl4%2Fs1600%2FChalkboard-background.jpg&f=1&nofb=1)

- [image - chalk rainbow background][https://media.istockphoto.com/photos/closeup-of-rainbow-chalk-arc-drawn-diagonally-on-asphalt-surface-picture-id90371999?k=6&m=90371999&s=170667a&w=0&h=T_MoK3-AVQxun7yrUEFwmJa1TfdqYQVXLVa5lRxtLaU=]
