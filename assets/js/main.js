// --------------------------Variables------------------------------------------
let powerStatus = false;
let count = 0;
let gameSequence = [];
let playerSequence = [];


// --------------------------Main game functions--------------------------------
function powerChange() {
    if (powerStatus == false) {
        powerStatus = true;
        document.getElementById('display').innerHTML = 'Ready';
    }
    else {
        powerStatus = false;
        document.getElementById('display').innerHTML = '';
    }
}

document.getElementById('start').addEventListener('click', function() {
    if (powerStatus == true) {
        newGame();
    }
});

function newGame(){
        let count = 1;
        document.getElementById('display').innerHTML = count;
        let gameSequence = [];
        let playerSequence = [];
        newRound(count);
    }

function newRound(count){
    generateSequence();
    displaySequence();
}





// --------------------------Helper functions-----------------------------------

function generateSequence(){
    gameSequence.push(Math.floor(Math.random()*4 +1));
}

function displaySequence(){
    let i = 0;
    for (i; i < gameSequence.length; i++)
    if (gameSequence[i] === 1){
        // do something to red square
    } else if (gameSequence[i] === 2){
        // do something to yellow square
    } else if (gameSequence[i] === 3){
        // do something to green square
    } else {
        // do something to blue square
    }
}