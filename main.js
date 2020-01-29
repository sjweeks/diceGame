// let playerOne = true


// let game = () => {
//     if (playerOne) {
//         console.log("Player One's Turn")
//         playerOne = false
//     }
//     else {
//         console.log("Player Two's Turn")
//         playerOne = true
//     }
// }

// game();
// game();
// game();
// game();


// attempt to create a random number between 1 and 6


// html element declarations
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const winStatus = document.getElementById("winStatus");
const rolled1 = document.getElementById("stats1");
const rolled2 = document.getElementById("stats2");
const rolled3 = document.getElementById("stats3");
const rolled4 = document.getElementById("stats4");
const rolled5 = document.getElementById("stats5");
const rolled6 = document.getElementById("stats6");
// const restart = document.getElementById("playButton");

diceImage.style.visibility = "hidden";

// let startGame;
let numberRolled;
let pointScored = 0;
let no1 = 0;
let no2 = 0;
let no3 = 0;
let no4 = 0;
let no5 = 0;
let no6 = 0;

//function declaration


const restart = () => {
    pointScored = 0;
    winStatus.style.visibility = "";
    winStatus.textContent = "";
    diceImage.style.visibility = "hidden";
    winStatus.textContent = "";
    totalScore.textContent = "";
    playerScore.textContent = "";
    rollButton = "";
}


const diceRoll = () => {
    numberRolled = (Math.ceil(Math.random() * 6));
    console.log(numberRolled);
}

// diceRoll()

const winOrLose = () => {
    
    if (numberRolled == 1) {
        winStatus.textContent = ("You have lost, play again?.")
        pointScored = 0;
        // restart()
        
    }
    else if (pointScored >= 20) {
        winStatus.textContent = ("You win!")
        pointScored = 0;
        // restart()
    }
    else {
        winStatus.textContent = ("Have another roll")
    }
    scoreAddition();
}

const scoreAddition = () => {
    // diceRoll()
    pointScored += numberRolled;
    // totalScore.textContent = (`Your total score is ${pointScored}`);
}

rollButton.addEventListener("click", () => {
    diceRoll()
    winOrLose()
    playerScore.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
    incrementFunction()
    // console.log("Hello there");
    // pointScored += numberRolled;
    totalScore.textContent = (`Your total score is ${pointScored}`)
})

playButton.addEventListener("click", () => {
    restart();
})

const incrementFunction = () => {
    // diceRoll()
    if (numberRolled == 1){
        no1++
        rolled1.textContent = no1;
    }
    else if (numberRolled == 2){
        no2++
        rolled2.textContent = no2;
    }
    else if (numberRolled == 3){
        no3++
        rolled3.textContent = no3;
    }
    else if (numberRolled == 4){
        no4++
        rolled4.textContent = no4;
    }
    else if (numberRolled == 5){
        no5++
        rolled5.textContent = no5;
    }
    else if (numberRolled == 6){
        no6++
        rolled6.textContent = no6;
    }
}


// function restart() {
//     diceRoll()
//     winOrLose()
//     playerScore.textContent = numberRolled;
//     diceImage.style.visibility = "visible";
//     diceImage.src = `images/dice${numberRolled}.png`
//     // console.log("Hello there");
//     // pointScored += numberRolled;
//     totalScore.textContent = (`Your total score is ${pointScored}`)
//     // scoreAddition();

// }

// winOrLose();




