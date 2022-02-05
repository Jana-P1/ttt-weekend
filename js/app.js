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
const squareArr = document.querySelectorAll(".square")
console.log(squareArr[5])
const messageInH2 = document.getElementById("message")  


/*----------------------------- Event Listeners -----------------------------*/
squareArr.forEach(square => square.addEventListener("click", handleClick))





/*-------------------------------- Functions --------------------------------*/
// Initialize Function

function init() {
  gameBoard = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null;
  render();
}
init()

function render() { 
  gameBoard.forEach((square, index) => {
    if(gameBoard[index] === 1) {
      squareArr[index].textContent = "X"
    } else if(gameBoard[index] === -1) {
      squareArr[index].textContent = "O"
    }
  })}

function handleClick(evt) {
  const index = (evt.target.id.replace("sq", ""))
  gameBoard[index] = turn
  console.log(gameBoard)
  render()
  }

  function switchTurn() {

  }
// handleClick()
