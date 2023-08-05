// querySelectors
var classicGame = document.querySelector(".classic-option")
var difficultGame = document.querySelector(".difficult-option")
var classicGameIcons = document.querySelector(".classic-icons-container")
var difficultGameIcons = document.querySelector(".difficult-icons-container")
var altSubHeading = document.querySelector(".alt-sub-heading")
var chooseGameHeading = document.querySelector(".choose-game")
var resultsDisplay = document.querySelector(".results-display")
// icons
var rockIcon = document.querySelector(".rock-icon")
var paperIcon = document.querySelector(".paper-icon")
var scissorsIcon = document.querySelector(".scissors-icon")

// eventListeners
classicGame.addEventListener("click", function () {
  // createGame()
  show(altSubHeading)
  hide(chooseGameHeading)
  hide(difficultGame)
  hide(classicGame)
  show(classicGameIcons)
})

difficultGame.addEventListener("click", function() {
  show(altSubHeading)
  hide(chooseGameHeading)
  hide(classicGame)
  hide(difficultGame)
  show(difficultGameIcons)
})
// make another eventListener for difficultGame and fire createGame() again?

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
  gameType = "Classic" // hard coded for now. connect to DOM.
  createPlayer(humanPlayerName)
  createPlayer(computerPlayerName)
  if (gameType === "Classic") {
    gameBoard = ["rock", "paper", "scissors"]
  } else {
    gameBoard = ["rock", "paper", "scissors", "tractor", "wheat"]
  }
  // show(classicGameIcons)
  // show(chooseFighterMsg)
  // hide(chooseGameMsg)
  // hide(gameTypeOptions)
  takeTurn(players[humanPlayerName], players[computerPlayerName])
}

function takeTurn(humanPlayer, computerPlayer) {
  if (humanPlayer.turn) {
    humanMove = gameBoard[1] // hard coded for now. connect to DOM
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

// display functions
function show(element) {
  element.removeAttribute("hidden")
}

function hide(element) {
  element.setAttribute("hidden", "")
}

// function displayGameResult() {
//   chooseFighterMsg.innerText = ""
// }

// classic-game-icons add event listener. then match ids. if event.target.id === icon id.

// show random icon:
// generate icon. create element and append.child 

// create element. append child. add to blank section. delete from 
// based on what the computer chose. add new class. then remove html element so it's not redundant
// on event listener, del element

// create el.

// function removeNewIcon() {
//   resultsIcons.removeChild(resultsIcons.firstElementChild);
// }