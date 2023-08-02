// querySelectors
var humanPlayer = document.querySelector(".human-player")
var computerPlayer = document.querySelector(".computer-player")
var classicGameOption = document.querySelector(".classic")
var difficultGameOption = document.querySelector(".difficult")

// eventListeners
classicGameOption.addEventListener("click", function () {
  hideElement(classicGameOption)
})

// global variables
var gameBoard;
var gameType;

// functions
function createPlayer(name, token) {
  var player = {
    name: name,
    token: token,
    turn: true,
    wins: 0
  }
  return player
}

function createGame() {
  // call on a button click,
  // player inputs name and token
  gameType = "Classic"
  var humanPlayer = createPlayer("human", "token", true)
  var computerPlayer = createPlayer("computer", "token", false)
  if (gameType === "Classic") {
    gameBoard = ["Rock", "Paper", "Scissors"]
  } else {
    gameBoard = ["Rock", "Paper", "Scissors", "Something", "Something"]
  }
  takeTurn(humanPlayer, computerPlayer)
}

function takeTurn(humanPlayer, computerPlayer) {
  if (gameBoard.length === 3) {
    gameType = "Classic" 
  }
  if (humanPlayer.turn) {
    var humanChoice = gameBoard[0]
    !humanPlayer.turn
    computerPlayer.turn = true
  } else {
    var computerMove = getRandomComputerMove()
  }
  checkForWIns(humanMove, computerMove)
}

function checkForWIns(humanMove, computerMove) {
  if (humanMove === "rock" && computerMove === "scissors") {
    humanPlayer.wins++
  } else if (humanMove === "scissors" && computerMove === "rock") {
    computerPlayer.wins++
  } else if (humanMove === "rock" && computerMove === "rock") {
    // draw
  }

  if (humanMove === "paper" && computerMove === "rock") {
    humanPlayer.wins++
  } else if (humanMove === "rock" && computerMove === "paper") {
    computerPlayer.wins++
  } else if (humanMove === "paper" && computerMove === "paper") {
    // draw
  }

  if (humanMove === "scissors" && computerMove === "paper") {
    humanPlayer.wins++
  } else if (humanMove === "paper" && computerMove === "scissors") {
    computerPlayer.wins++
  } else if (humanMove === "scissors" && computerMove === "scissors") {
    // draw
  }
}

function getRandomComputerMove() {
  var randGameBoardIndex = getRandomIndex(gameBoard)
  return  gameBoard[randGameBoardIndex]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array)
}


