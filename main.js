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

diceImage.style.visibility = "hidden";

let numberRolled;
let playerOnePointsScored = 0;
let playerTwoPointsScored = 0;
let no1 = 0;
let no2 = 0;
let no3 = 0;
let no4 = 0;
let no5 = 0;
let no6 = 0;
let playerOne = true;

const game = () => {
  if (playerOne) {
    // player1.textContent = "Player One's turn";
    console.log("Player One Text")
    player2.style.visibility = "hidden";
    console.log("Player one, you've had your turn.");

    playerOne = false;
    playerTurn();
  }
  else {
    // player2.textContent = "Player Two's turn";
    console.log("Player One Text")
    player1.style.visibility = "hidden";
    console.log("Player two, you've had your turn.");
    playerOne = true;
    playerTurn();
  }
};

const playerTurn = () => {
    if (playerOne) {
        player1.textContent = "Player One's turn";
        console.log("Player One New Func")
    }
    else {
        player2.textContent = "Player Two's turn";
        console.log("Player Two New Func")
    }
}

const diceRoll = () => {
  numberRolled = Math.ceil(Math.random() * 6);
  console.log(numberRolled);
};

const winOrLose = () => {
  if (playerOne) {
    if (numberRolled == 1) {
      winStatus.textContent = "Player One, you have lost, play again?.";
      playerOnePointsScored = 0;
      game();
    //   playerTurn();
    } else if (playerOnePointsScored >= 20) {
      winStatus.textContent = "Player One, you win!";
      playerOnePointsScored = 0;
      game();
    //   playerTurn();
    } else {
      winStatus.textContent = "Player Two, it's your turn, have another roll";
    //   playerTurn();
    }
  } else {
    if (numberRolled == 1) {
      winStatus.textContent = "Player Two, you have lost, play again?.";
      playerTwoPointsScored = 0;
      game();
    //   playerTurn();
    } else if (playerTwoPointsScored >= 20) {
      winStatus.textContent = "Player Two, you win!";
      playerTwoPointsScored = 0;
      game();
    //   playerTurn();
    } else {
      winStatus.textContent = "Player One, it's your turn, have another roll";
    //   playerTurn();
    }
  }
  scoreAddition();
};

const scoreAddition = () => {
  if (playerOne) {
    playerOnePointsScored += numberRolled;
  } else {
    playerTwoPointsScored += numberRolled;
  }
};

rollButton.addEventListener("click", () => {
  diceRoll();
  winOrLose();
//   playerTurn();
  playerScore.textContent = numberRolled;
  diceImage.style.visibility = "visible";
  diceImage.src = `img/dice${numberRolled}.png`;
  incrementFunction();
  if (playerOne) {
    totalScore.textContent = `Your total score is ${playerOnePointsScored}`;
  } else {
    totalScore.textContent = `Your total score is ${playerTwoPointsScored}`;
  }
  game();
});

const incrementFunction = () => {
  if (numberRolled == 1) {
    no1++;
    rolled1.textContent = no1;
  } else if (numberRolled == 2) {
    no2++;
    rolled2.textContent = no2;
  } else if (numberRolled == 3) {
    no3++;
    rolled3.textContent = no3;
  } else if (numberRolled == 4) {
    no4++;
    rolled4.textContent = no4;
  } else if (numberRolled == 5) {
    no5++;
    rolled5.textContent = no5;
  } else if (numberRolled == 6) {
    no6++;
    rolled6.textContent = no6;
  }
};
