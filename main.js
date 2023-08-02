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
var gameBoard;
var gameType;
var humanPlayer;
var computerPlayer;

// functions
function createPlayer(name) {
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
  var humanPlayer = createPlayer("human")
  var computerPlayer = createPlayer("computer")
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
    var humanMove = gameBoard[0]
    humanPlayer.turn = !humanPlayer.turn
    computerPlayer.turn = true
    checkForWIns(humanMove, computerMove)
  } else {
    var computerMove = getRandomComputerMove()
    checkForWIns(humanMove, computerMove)
  }
}

function checkForWIns(humanMove, computerMove) {
  var winningMoves = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }

  if (humanMove === computerMove) {
    // invoke draw function
  } else if (winningMoves[humanMove] === computerMove) {
    humanPlayer.wins++
  } else if(winningMoves[computerMove] === humanMove){
    computerPlayer.wins++
  }
}


function getRandomComputerMove() {
  var randGameBoardIndex = getRandomIndex(gameBoard)
  return  gameBoard[randGameBoardIndex]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array)
}


