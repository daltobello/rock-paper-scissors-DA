// querySelectors
// var humanPlayer = document.querySelector(".human-player")
// var computerPlayer = document.querySelector(".computer-player")
var classicGameOption = document.querySelector(".classic")
var difficultGameOption = document.querySelector(".difficult")

// eventListeners
classicGameOption.addEventListener("click", function () {
  hideElement(classicGameOption)
})

// global variables
var gameBoard = []
var gameType;
var humanPlayer;
var computerPlayer;


// functions
function createPlayer(name) {
  var player = {
    name: name,
    turn: true,
    wins: 0
  }
  return player
}

function createGame() {
  gameType = "Classic"
  humanPlayer = createPlayer("human")
  computerPlayer = createPlayer("computer")
  if (gameType === "Classic") {
    gameBoard = ["rock", "paper", "scissors"]
  } else {
    gameBoard = ["rock", "paper", "scissors", "something", "something"]
  }
  takeTurn(humanPlayer, computerPlayer)
}

function takeTurn(humanPlayer, computerPlayer) {
  humanMove;
  computerMove;
  if (humanPlayer.turn) {
    humanMove = gameBoard[0]
    humanPlayer.turn = !humanPlayer.turn
    computerPlayer.turn = true
    computerMove = getRandomComputerMove()
  } else {
    humanMove = gameBoard[0]
    computerMove = getRandomComputerMove()
  }
  checkGameResults(humanMove, computerMove)
}

function checkGameResults(humanMove, computerMove) {
  if (humanMove === computerMove) {
    checkForDraw()
  } else {
    checkForWins(humanMove, computerMove)
  }
} 

function checkForDraw() {
  console.log("It's a draw")
}

function checkForWins(humanMove, computerMove) {
  
  var winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }

  if (humanMove === computerMove) {
    checkForDraw()
  } else if (winningMoves[humanMove] === computerMove) {
    humanPlayer.wins++
    resetGame()
  } else if(winningMoves[computerMove] === humanMove){
    computerPlayer.wins++
    resetGame()
  }
}

function resetGame() {
  humanPlayer.turn = true
  computerPlayer.turn = false
}

function getRandomComputerMove() {
  var randGameBoardIndex = getRandomIndex(gameBoard)
  return  gameBoard[randGameBoardIndex]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}