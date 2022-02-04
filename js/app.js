/*-------------------------------- Constants --------------------------------*/
// Define an array to represent the 9 squares on the board



/*---------------------------- Variables (state) ----------------------------*/
// Determine whose turn it is (i.e. X or O) 
// Turn => keeps track of whose turn it is
// isWinner => represents game's state (tie, winner, or game is ongoing)
// gameboard => represents the game board
let nextTurn, isWinner, gameBoard



/*------------------------ Cached Element References ------------------------*/
let squareArr = document.querySelectorAll(".square")
console.log(squareArr)
let messageInH2 = document.getElementById("message") 


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
// Initialize Function

function init() {
  let gameBoard = [null, null, null, null, null, null, null, null, null];
  const players = {
    "1" : {
      name: "",
      score: 0
    },
    "-1": {
      name: "",
      score: 0
    }
  };
  console.log(gameBoard);
  winner = null;
  render();
}
init()

function render() { 
  // Reads through the squareArr array to 
  for(let i = 0; i < squareArr.length; i++) {
    if (squareArr[i] === 1) {
      squareArr[i].innerHTML = "X"
    } else if (squareArr[i] === -1) {
      squareArr[i].innerHTML= "O"
    } else (
      squareArr[i] = null
    )
    console.log(squareArr[i])
    return squareArr[i]
    }
  if (winner !== null){
    // Display message for next turn `Take a turn ${nextTurn}`
  } else if (winner === "T") {
    //  Display message for a tie "Well look at that! We got us a tie!"
  } else{
    // Display message for winner `Congrats, ${winner}! You tic-tac-toe'd your way to a win!`
  }
}

render()