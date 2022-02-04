/*-------------------------------- Constants --------------------------------*/
// Define an array to represent the 9 squares on the board
const player1 = 1
const player2 = -1
winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]


/*---------------------------- Variables (state) ----------------------------*/
// Determine whose turn it is (i.e. X or O) 
// Turn => keeps track of whose turn it is
// isWinner => represents game's state (tie, winner, or game is ongoing)
// gameboard => represents the game board
let nextTurn, isWinner, gameBoard



/*------------------------ Cached Element References ------------------------*/
let squareArr = Array.from(document.querySelectorAll(".square"))
console.log(squareArr)
let messageInH2 = document.getElementById("message") 


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
// Initialize Function

function init() {
  gameBoard = [-1, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null;
  render();
}
init()

function render() { 
  for(let i = 0; i < gameBoard.length; i++) {
    // console.log(gameBoard[i], gameBoard, i)
    if (gameBoard[i] === 1) {
          gameBoard[i].textContent = "X"
        } else if (gameBoard[i] === -1) {
          gameBoard[i].textContent= "O"
        } else if (gameBoard[i] === null) {
          gameBoard[i].textContent = " "
        }
  }
  if (winner !== null){
    // Display message for next turn `Take a turn ${nextTurn}`
  } else if (winner === "T") {
    //  Display message for a tie "Well look at that! We got us a tie!"
  } else {
    // Display message for winner `Congrats, ${winner}! You tic-tac-toe'd your way to a win!`
  }
}
render()

function handleClick(_squareArr) {
  // Get the index of the square that is selected
  // Extract the index from an id assigned to the appropriate <div> in HTML 
  // Return the id and index once selected, so that the other player cannot select the same square
  // Change the player's turn by => (turn *= -1)
  // Set winner variable if there is a winner
    // Call getWinner function
  console.log("handleclick invoked")
}
handleClick()

function getWinner() {
  console.log("getWinner invoked")
}