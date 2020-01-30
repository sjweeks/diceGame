

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
const player1 = document.getElementById("playerOne");
const player2 = document.getElementById("playerTwo");
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
let playerOne = true;
// let playerTwo = 0;

// const restart = () => {
//     pointScored = 0;
//     winStatus.style.visibility = "";
//     winStatus.textContent = "";
//     diceImage.style.visibility = "hidden";
//     winStatus.textContent = "";
//     totalScore.textContent = "";
//     playerScore.textContent = "";
//     rollButton = "";
//     game();
// }

const game = () => {
    if (playerOne) {
        player1.textContent = ("Player One's turn");
        playerOne = false;
        player2.style.visibility = "hidden";
    }
    // else if (playerTwo = true) {
    else {
        // playerTwo = true;
        player2.textContent = ("Player Two's turn");
        playerOne = true
        player1.style.visibility = "hidden";
    }
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
        game()
    }
    else if (pointScored >= 20) {
        winStatus.textContent = ("You win!")
        pointScored = 0;
        game()
    }
    else {
        winStatus.textContent = ("Have another roll")
    }
    scoreAddition();
    // game()
}

const scoreAddition = () => {
    pointScored += numberRolled;
}

rollButton.addEventListener("click", () => {
    diceRoll()
    winOrLose()
    // game()
    playerScore.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
    incrementFunction()
    totalScore.textContent = (`Your total score is ${pointScored}`)
    game();
})

// playButton.addEventListener("click", () => {
//     restart();
// })

const incrementFunction = () => {
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


