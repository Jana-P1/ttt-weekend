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
  [2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
// Determine whose turn it is (i.e. X or O) 
// Turn => keeps track of whose turn it is
// isWinner => represents game's state (tie, winner, or game is ongoing)
// gameboard => represents the game board
let nextTurn, isWinner, gameBoard



/*------------------------ Cached Element References ------------------------*/
const squareArr = document.querySelectorAll(".square")
const messageInH2 = document.getElementById("message")  
const resetBtn = document.getElementById("reset-btn")
const grid = document.querySelector("#board")
const messageInH3 = document.getElementById("message-two")

/*----------------------------- Event Listeners -----------------------------*/
squareArr.forEach(square => square.addEventListener("click", handleClick))
resetBtn.addEventListener("click", replay)






/*-------------------------------- Functions --------------------------------*/
// Initialize Function

function init() {
  messageInH2.textContent = "Let's play!"
  gameBoard = [null, null, null, null, null, null, null, null, null]
	messageInH3.textContent = "You're up, X"
	turn = 1
  isWinner = null;
  render();
}
init()

function render() { 
  gameBoard.forEach((square, index) => {
    if(gameBoard[index] === 1) {
      squareArr[index].textContent = "X"
			squareArr[index].style.color = "black"
			squareArr[index].style.background = "#3498DB"

    } else if(gameBoard[index] === -1) {
      squareArr[index].textContent = "O"
			squareArr[index].style.color = "white"
			squareArr[index].style.background = "#F1C40F "
    }
  })
}

function handleClick(evt) {
  const index = (evt.target.id.replace("sq", ""))
	if(isWinner) {
		return;
	}
	if(gameBoard[index] !== null) {	
		return gameBoard[index]
	} 
	gameBoard[index] = turn
	switchTurn()
	getWinner()
	render()
	
	
}

  function switchTurn() {
    // change the the player after each turn
    // prompt the next player to place their mark on the board
    turn *= -1
		
    if(turn === -1){
			messageInH3.textContent = ""
      messageInH2.textContent = "Let's go, 0!"
    } else {
      messageInH2.textContent = "X, mark your spot!"
    }
  }

  function getWinner() {
		const tie = gameBoard.every(elem => elem !== null)
   	for(let i = 0; i < winningCombos.length; i++) {
		if(gameBoard[winningCombos[i][0]] + gameBoard[winningCombos[i][1]] + gameBoard[winningCombos[i][2]] === 3){
			console.log("X won")
			isWinner = player1
			messageInH2.textContent = "Winner winner chicken dinner! Way to go, X"
			confetti.start()
		} else if(gameBoard[winningCombos[i][0]] + gameBoard[winningCombos[i][1]] + gameBoard[winningCombos[i][2]] === -3){
			console.log("O won")
			isWinner = player2
			messageInH2.textContent = "Winner winner chicken dinner! Great job, 0"
			confetti.start()
		} else if (tie) {
			// console.log("tie")
			isWinner = "T"
			messageInH2.textContent = "Hey look! It's a tie...womp womp"
		} else{
				isWinner = null
		}
	}
}
function replay(evt) {
	for (let i = 0; i < squareArr.length; i++) {
		squareArr[i].textContent = ""
		squareArr[i].style.background = ""
		confetti.stop()
}
init()
}			



/**
 * // 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board.    

	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.


// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
	
	// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!

	// 2.2) Store the element that displays the game status on the page.


// 3) Upon loading, the app should:

	// 3.1) Call an initialize function

	// 3.2) That initialize function should initialize the state variables:
	  // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
	    // The 9 elements will "map" to each square.
	    // Index 0 represents the top-left square.
	    // Index 1 represents the top-middle square.
			// So on, continuing through the entire board until...
	    // Index 8 maps to the bottom-right square.
	  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
	    // Player 'O' will be represented by -1.
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.

	// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

		// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.


// 4) Define the required constants:

	// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If you are having trouble with this step, feel free to check out the winningCombos array in the solution code. 


// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).
 */