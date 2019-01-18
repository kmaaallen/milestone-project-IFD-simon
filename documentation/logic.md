# Logic for Simon Game
To plan the logic for this game I first considered user stories - what will the player do/expect? How will the game react?
Below are my 'player expectations/actions' with the corresponding game logic beneath.

For clarity I separated out my JavaScript file (main.js) into variables, main game functions and helper functions.<br>
The explanation of these functions and their place in the game is explained below.

### The player will turn the game on (using power button)
#### The game should have a power button that has an ON state and an OFF state.
A variable 'powerStatus' is defined and signed initial value of false (as game will be 'OFF' when player first visits page)<br>
A value of false will equate to OFF and a value of true will equate to ON.

#### The power button should toggle between ON and OFF states on activation (i.e when the player clicks it)
When the player clicks the power button it should trigger a function that toggles between ON and OFF states<br>
An onclick event can be used in the HTML to trigger a function 'powerChange()' defined in script.<br>
Within powerChange() function, game must recognise current status of power and convert to opposite.

### The player will start the game (by pressing the start button)
### The player will expect to see which round they are on
### The player will expect to see/hear a sequence of length corresponding to the round they are on (the count)
### The player will expect to be able to copy that sequence by pressing the coloured squares
### In response to a wrong input, the player will expect to be shown the sequence again (strict mode off) or restart the game with a new sequence (strict mode on)
### In response to a correct input (not on the final round) the player will expect to be taken to the next round
### On that next round the player will expect to be shown the same sequence plus one additional color/noise to copy
### On the final round (20), on correct input, the player expects to be shown 'win!' message and for game to restart
### On pressing 'start' button (at any time, provided power is on) the player expects the game to restart from beginning
### On pressing 'power' button (at any time), player expects game to toggle on or off depending on state when button pressed