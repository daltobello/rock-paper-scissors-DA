// querySelectors
// var humanPlayer = document.querySelector(".human-player")
// var computerPlayer = document.querySelector(".computer-player")
var classicGameOption = document.querySelector(".classic")
var difficultGameOption = document.querySelector(".difficult")
var classicGameIcons = document.querySelector(".classic-game-icons")
var entireGameBoard = document.querySelector(".game-board")

// eventListeners
classicGameOption.addEventListener("click", function () {
  show(classicGameIcons)
  hide(entireGameBoard)
})

// global variables
var gameBoard = []
var gameType;
var players = {}
var humanPlayerName = "human"
var computerPlayerName = "computer"


// functions
function createPlayer(name) {
  if (!players[name]) {
    players[name] = {
      name: name,
      turn: true,
      wins: 0
    }
  }
}

function createGame() {
  gameType = "Classic"
  createPlayer(humanPlayerName)
  createPlayer(computerPlayerName)
  if (gameType === "Classic") {
    gameBoard = ["rock", "paper", "scissors"]
  } else {
    gameBoard = ["rock", "paper", "scissors", "something", "something"]
  }
  takeTurn(players[humanPlayerName], players[computerPlayerName])
}

function takeTurn(humanPlayer, computerPlayer) {
  if (humanPlayer.turn) {
    humanMove = gameBoard[1]
    humanPlayer.turn = !humanPlayer.turn
    computerPlayer.turn = true
    computerMove = getRandomComputerMove()
  } else {
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

  if (winningMoves[humanMove] === computerMove) {
    players[humanPlayerName].wins++
    resetGame()
  } else if (winningMoves[computerMove] === humanMove) {
    players[computerPlayerName].wins++
    resetGame()
  } else if (humanMove === computerMove) {
    checkForDraw()
  }
}

function resetGame() {
  players[humanPlayerName].turn = true
  players[computerPlayerName].turn = false
}

function getRandomComputerMove() {
  var randGameBoardIndex = getRandomIndex(gameBoard)
  return gameBoard[randGameBoardIndex]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}


// DOM manipulation
function show(element) {
  element.removeAttribute("hidden")
}

function hide(element) {
  element.setAttribute("hidden", "")
}