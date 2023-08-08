// querySelectors
var classicGame = document.querySelector(".classic-option")
var difficultGame = document.querySelector(".difficult-option")
var classicGameIcons = document.querySelector(".classic-icons-container")
var difficultGameIcons = document.querySelector(".difficult-icons-container")
var altSubHeading = document.querySelector(".alt-sub-heading")
var chooseGameHeading = document.querySelector(".choose-game")
var resultsDisplay = document.querySelector(".results-display")
var humanWins = document.querySelector(".human-wins")
var computerWins = document.querySelector(".computer-wins")
var rockIcon = document.querySelector("#happy-rocks")
var paperIcon = document.querySelector("#happy-paper")
var scissorsIcon = document.querySelector("#happy-scissors")
var tractorIcon = document.querySelector("#green-tractor")
var wheatIcon = document.querySelector("#yellow-wheat")

// eventListeners
classicGame.addEventListener("click", function () {
  startGame("classic")
})

difficultGame.addEventListener("click", function () {
  startGame("difficult")
})

classicGameIcons.addEventListener("click", function (event) {
  if (event.target === rockIcon || event.target === scissorsIcon || event.target === paperIcon) {
    takePlayerTurn(event.target.id)
  }
})

difficultGameIcons.addEventListener("click", function (event) {
  if (event.target === rockIcon || event.target === scissorsIcon || event.target === paperIcon || event.target === tractorIcon || event.target === wheatIcon) {
    console.log(event.target.id)
    takePlayerTurn(event.target.id)
  }
})


// global variables
var gameBoard;
var gameType;
var players = {}
var human = "human"
var computer = "computer"

// functions
function createPlayer(name) {
  if (!players[name]) {
    players[name] = {
      name: name,
      turn: true,
      wins: 0,
      move: null,
    }
  }
}

function createGame() {
  createPlayer(human)
  createPlayer(computer)
}

function startGame(type) {
  gameType = type
  displayGame(type)
  createGame()
}

function displayGame(type) {
  altSubHeading.innerHTML = ""
  hide(chooseGameHeading)
  hide(difficultGame)
  hide(classicGame)

  if (type === "classic") {
    gameBoard = [rockIcon, paperIcon, scissorsIcon]
    show(classicGameIcons)
    hide(difficultGameIcons)
  } else if (type === "difficult"){
    gameBoard = [rockIcon, paperIcon, scissorsIcon, tractorIcon, wheatIcon]
    show(difficultGameIcons)
    hide(classicGameIcons)
  }
    show(altSubHeading)
}

function takePlayerTurn(move) {
  var humanPlayer = players[human]
  var computerPlayer = players[computer]
  if (humanPlayer.turn) {
    humanPlayer.turn = false
    computerPlayer.turn = true
    humanPlayer.move = move
    var computerMove = getRandomComputerMove()
    computerPlayer.move = computerMove
  }
  checkGameResults(humanPlayer.move, computerPlayer.move)
}

function checkGameResults(humanMove, computerMove) {
  if (humanMove === computerMove.id) {
    displayDraw()
  } else {
    handleWinLoss(humanMove, computerMove.id)
  }
  displayGameResults()
}

function displayDraw() {
  altSubHeading.innerHTML += "😭It's a draw!😭"
}

function handleWinLoss(humanMove, computerMove) {
  var winningMoves = {
    'happy-rocks': 'happy-scissors',
    'happy-paper': 'happy-rocks',
    'happy-scissors': 'happy-paper'
  }
  console.log("computer:", computerMove)
  console.log("human:", humanMove)

  if (winningMoves[humanMove] === computerMove) {
    players[human].wins++
    altSubHeading.innerHTML += "👨🏻‍🌾You won this round!👨🏻‍🌾" // separate concerns
    resetGame()
  } else if (winningMoves[computerMove] === humanMove) {
    players[computer].wins++
    altSubHeading.innerHTML += "💻Computer won this round!💻" // separate concerns
    resetGame()
  }
}

function resetGame() {
  players[human].turn = true
  players[computer].turn = false
}

function getRandomComputerMove() {
  var possibleMoves;
  if (gameType === "classic") {
    possibleMoves = [rockIcon, paperIcon, scissorsIcon]
  } else if (gameType === "difficult") {
    possibleMoves = [rockIcon, paperIcon, scissorsIcon, tractorIcon, wheatIcon]
  }
  var randGameBoardIndex = getRandomIndex(possibleMoves)
  return possibleMoves[randGameBoardIndex]
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

function displayGameResults() {
  show(altSubHeading)
  hide(classicGameIcons)
  displayIconResults(players[human].move, players[computer].move)
  displayWins()
  // add a timeout function and call it here
}

function displayIconResults(winner, loser) {
  var winnerIcon = createIconImg(winner)
  var loserIcon = createIconImg(loser.id)
  var gameResults = document.getElementById("result")
  gameResults.appendChild(winnerIcon)
  gameResults.appendChild(loserIcon)
}

function removeNewIcon() {
  gameResults.removeChild(gameResults.firstElementChild);
  // use this function
}

function createIconImg(iconId) {
  var iconImg = document.createElement("img")
  iconImg.setAttribute("src", `./assets/${iconId}.png`)
  iconImg.setAttribute("id", iconId)
  return iconImg
}

function displayWins() {
  humanWins.innerHTML = `Wins: ${players[human].wins}`
  computerWins.innerHTML = `Wins: ${players[computer].wins}`
}



// function that takes you home
// setTimeout function when go home
