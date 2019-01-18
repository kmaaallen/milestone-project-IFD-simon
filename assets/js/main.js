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
       return  red();
    } else if (gameSequence[i] === 2){
        return yellow();
    } else if (gameSequence[i] === 3){
        return green();
    } else {
        return blue();
    }
}

function red(){
    $(document.getElementById('1')).addClass('red-light');
}
function yellow(){
    $(document.getElementById('2')).addClass('yellow-light');
}
function green(){
    $(document.getElementById('3')).addClass('green-light');
}
function blue(){
    $(document.getElementById('4')).addClass('blue-light');
}