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
        let gameSequence = [];
        let playerSequence = [];
        newRound();
    }





// --------------------------Helper functions-----------------------------------