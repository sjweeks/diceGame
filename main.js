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


diceImage.style.visibility = "hidden";

let numberRolled;
let pointScored = 0;

//function declaration

const diceRoll = () => {
    numberRolled = (Math.ceil(Math.random()*6));
    console.log(numberRolled);
}

// diceRoll()

const winOrLose = () => {
    // numberRolled = diceRoll();
    // pointScored = scoreAddition();
        if (numberRolled == 1){
            console.log("You have lost, try again.")
            pointScored = 0;
        }
        else if (pointScored >= 20) {
            console.log("You win!")
            pointScored = 0;
        }
        else {
            console.log("Have another roll")
        }
        scoreAddition();
}

const scoreAddition = () => {
    diceRoll()
    pointScored += numberRolled;
    console.log(`Your total score is ${pointScored}`);
}

rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = `images/dice${numberRolled}.png`
    console.log("Hello there");
})



// winOrLose();




