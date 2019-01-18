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

#### When the power status is ON (i.e the game is on) there should be some indication to player that this is so
When power is ON the game should display a visual indicator<br>
This will be displayed in display box - a 'ready' message will show to indicate the game is ready to be started.

### The player will start the game (by pressing the start button)
#### Game must recognise when start button is clicked
Game uses an event listener to hear if start button is clicked. 

#### Game must initiate game start
The game should only start IF the power is ON and the start button has been clicked.<br>
First part of this function should check if power is ON and start button has been clicked to BOTH be true before executing rest of code.<br>
If this is the case, game variables should be set to start positions <br>
'count' (the number of rounds) is set to an initial value of 1 (this newGame function will only ever be called for very first round)<br>
'gameSequence' is set to an empty array (this is the sequence the player is expected to copy)<br>
'playerSequence' is set to an empty array (this is the sequence the player inputs for comparison)<br>

### The player will expect to see which round they are on
When game is initiated via newGame function display should show count value (i.e what round the plaer is on)

### The player will expect to see/hear a sequence of length corresponding to the round they are on (the count)
#### The game will have to generate a random sequence between the numbers 1 and 4
For this a generateSequence() helper function is created which pushes a new random number from 1 - 4 into the gameSequence array
each time it is called. This helper function is placed within the newRound() function.

#### The game will have to equate the numbers in the gameSequence array to colored squares the user sees and display a visual and sound change to the player
Each colored square has been given a unique ID (red = 1, yellow = 2, green = 3, blue = 4). <br>
The game needs to iterate through the gameSequence and link each value with its corresponding color, that means when it comes across a '1'
in the game sequence array - the red square does something. Encompass this using a new helper function called displaySequence().<br>
The displaySequence() function will be called within the newRound() function.



### The player will expect to be able to copy that sequence by pressing the coloured squares
### In response to a wrong input, the player will expect to be shown the sequence again (strict mode off) or restart the game with a new sequence (strict mode on)
### In response to a correct input (not on the final round) the player will expect to be taken to the next round
### On that next round the player will expect to be shown the same sequence plus one additional color/noise to copy
### On the final round (20), on correct input, the player expects to be shown 'win!' message and for game to restart
### On pressing 'start' button (at any time, provided power is on) the player expects the game to restart from beginning
### On pressing 'power' button (at any time), player expects game to toggle on or off depending on state when button pressed