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
        return newRound(1);
    }

function newRound(count){
    generateSequence();
    displaySequence();
    testFunction();
}





// --------------------------Helper functions-----------------------------------

function generateSequence(){
    gameSequence.push(Math.floor(Math.random()*4 +1));
}

function displaySequence(){
    let i = 0;
    for (i; i < gameSequence.length; i++)
    if (gameSequence[i] === 1){
       return red();
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
    setTimeout(function(){
      $(document.getElementById('1')).removeClass('red-light');  
    }, 500);
}
function yellow(){
    $(document.getElementById('2')).addClass('yellow-light');
    setTimeout(function(){
      $(document.getElementById('2')).removeClass('yellow-light');  
    }, 500);
}
function green(){
    $(document.getElementById('3')).addClass('green-light');
    setTimeout(function(){
      $(document.getElementById('3')).removeClass('green-light');  
    }, 500);
}
function blue(){
    $(document.getElementById('4')).addClass('blue-light');
    setTimeout(function(){
      $(document.getElementById('4')).removeClass('blue-light');  
    }, 500);
}
