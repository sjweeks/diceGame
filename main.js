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
// const restart = document.getElementById("playButton");

diceImage.style.visibility = "hidden";

// let startGame;
let numberRolled;
let pointScored = 0;

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
    diceImage.src = `img/dice${numberRolled}.png`
    // console.log("Hello there");
    // pointScored += numberRolled;
    totalScore.textContent = (`Your total score is ${pointScored}`)
    // scoreAddition();
})

playButton.addEventListener("click", () => {
    restart();
})




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




