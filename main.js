// querySelectors
var classicGame = document.querySelector(".classic-option")
var difficultGame = document.querySelector(".difficult-option")
var classicGameIcons = document.querySelector(".classic-icons-container")
var difficultGameIcons = document.querySelector(".difficult-icons-container")
var altSubHeading = document.querySelector(".alt-sub-heading")
var chooseGameHeading = document.querySelector(".choose-game")
var resultsDisplay = document.querySelector(".results-display")
var gameBoardContainer = document.querySelector(".game-board")
var gameResults = document.querySelector(".game-results")
// icons
var rockIcon = document.querySelector("#rock-icon")
var paperIcon = document.querySelector("#paper-icon")
var scissorsIcon = document.querySelector("#scissors-icon")
var tractorIcon = document.querySelector("#tractor-icon")
var wheatIcon = document.querySelector("#wheat-icon")


// eventListeners
classicGame.addEventListener("click", function () {
  gameType = "Classic"
  displayClassicGame()
  createGame()
})

difficultGame.addEventListener("click", function () {
  gameType = "Difficult"
  displayDifficultGame()
  createGame()
})

classicGameIcons.addEventListener("click", function(event) {
  if (event.target === rockIcon || event.target === scissorsIcon || event.target === paperIcon) { 
    clickedIcon = event.target.id
    takeTurn(players[humanPlayerName], players[computerPlayerName], clickedIcon)
  } 
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
      wins: 0,
      humanMove: null,
      computerMove: null
    }
  }
}

function createGame() {
  createPlayer(humanPlayerName)
  createPlayer(computerPlayerName)
  if (gameType === "Classic") {
    gameBoard = [rockIcon, paperIcon, scissorsIcon]
  } else {
    gameBoard = [rockIcon, paperIcon, scissorsIcon, tractorIcon, wheatIcon]
  }
}

function takeTurn(humanPlayer, computerPlayer, humanMove) {
  var computerMove;
  if (humanPlayer.turn) {
    humanPlayer.turn = !humanPlayer.turn
    computerPlayer.turn = true
    humanPlayer.humanMove = humanMove
    computerMove = getRandomComputerMove()
    computerPlayer.computerMove = computerMove
    checkGameResults(humanMove, computerMove)
    displayPlayerMoves(humanMove, computerMove)
  }
}

function displayPlayerMoves(humanMove, computerMove) {
  gameResults.innerHTML = humanMove
}
// currently working here --->


function checkGameResults(humanPlayerMove, computerPlayerMove) {
 var humanPlayerMove = players[humanPlayerName].humanMove
 var computerPlayerMove = players[computerPlayerName].computerMove
  if (humanPlayerMove === computerPlayerMove) {
    checkForDraw()
  } else {
    checkForWins(humanPlayerMove, computerPlayerMove)
  }
}

function checkForDraw() {
  console.log("It's a draw")
}

function checkForWins(humanMove, computerMove) {
  var winningMoves = {
    rock: scissorsIcon,
    paper: rockIcon,
    scissors: paperIcon
  }

  if (winningMoves[humanMove] === computerMove.id) {
    players[humanPlayerName].wins++
    resetGame()
  } else if (winningMoves[computerMove] === humanMove.id) {
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

// DOM manipulation functions
function show(element) {
  element.removeAttribute("hidden")
}

function hide(element) {
  element.setAttribute("hidden", "")
}

function displayClassicGame() {
  show(altSubHeading)
  hide(chooseGameHeading)
  hide(difficultGame)
  hide(classicGame)
  show(classicGameIcons)
}

function displayDifficultGame() {
  show(altSubHeading)
  hide(chooseGameHeading)
  hide(classicGame)
  hide(difficultGame)
  show(difficultGameIcons)
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


