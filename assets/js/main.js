// --------------------------Variables------------------------------------------
let powerStatus = false;
let counter = 0;
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




// --------------------------Helper functions-----------------------------------