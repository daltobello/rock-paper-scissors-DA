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
var changeGame = document.querySelector(".switch-game-type")

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
  }
  takePlayerTurn(event.target.id)
})

changeGame.addEventListener("click", function () {
  displayHome()
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
  hide(chooseGameHeading)
  hide(difficultGame)
  hide(classicGame)
  if (type === "classic") {
    gameBoard = [rockIcon, paperIcon, scissorsIcon]
    showClassicGame()
  } else if (type === "difficult") {
    gameBoard = [rockIcon, paperIcon, scissorsIcon, tractorIcon, wheatIcon]
    showDifficultGame()
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
  handleWinLoss(humanPlayer.move, computerPlayer.move)
}

function handleWinLoss(humanMove, computerMove) {
  var result = updateGameResults(humanMove, computerMove.id)
  updateDOMResult(result)
  displayGameResults()
}

function updateGameResults(humanMove, computerMove) {
  var winningMoves = {
    "happy-rocks": ["happy-scissors", "yellow-wheat"],
    "happy-paper": ["happy-rocks", "green-tractor"],
    "happy-scissors": ["happy-paper", "yellow-wheat"],
    "yellow-wheat": ["happy-paper", "green-tractor"],
    "green-tractor": ["happy-scissors", "happy-rocks"]
  }

  if (winningMoves[humanMove].includes(computerMove)) {
    players[human].wins++
    return "human"
  } else if (winningMoves[computerMove].includes(humanMove)) {
    players[computer].wins++
    return "computer"
  } else {
    return "draw"
  }
}

function updateDOMResult(result) {
  altSubHeading.innerHTML = ""
  if (result === "human") {
    altSubHeading.innerHTML += "👨🏻‍🌾You won this round!👨🏻‍🌾"
  } else if (result === "computer") {
    altSubHeading.innerHTML += "💻Computer won this round!💻"
  } else if (result === "draw") {
    altSubHeading.innerHTML += "😭It's a draw!😭"
  }
  resetGame()
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

function showClassicGame() {
  show(altSubHeading)
  show(classicGameIcons)
  hide(difficultGameIcons)
}

function showDifficultGame() {
  show(altSubHeading)
  show(difficultGameIcons)
  hide(classicGameIcons)
}

function displayGameResults() {
  if (gameType === "classic") {
    hide(classicGameIcons)
    show(changeGame)
  } else if (gameType === "difficult") {
    hide(difficultGameIcons)
    show(changeGame)
  }
  displayIconResults(players[human].move, players[computer].move)
  displayWins()
  setTimeout(function () {
    if (gameType === "classic") {
      showClassicGame()
    } else if (gameType === "difficult") {
      showDifficultGame()
    }
    updateDOMResult()
    clearIconResults()
    resetAltSubHeading()
  }, 1500)
}

function resetAltSubHeading() {
  altSubHeading.innerHTML = "";
  altSubHeading.innerHTML += "Choose your fighter!"
}

function displayIconResults(winner, loser) {
  var winnerIcon = createIconImg(winner)
  var loserIcon = createIconImg(loser.id)
  var gameResults = document.getElementById("result")
  gameResults.appendChild(winnerIcon)
  gameResults.appendChild(loserIcon)
}

function createIconImg(iconId) {
  var iconImg = document.createElement("img")
  iconImg.setAttribute("src", `./assets/${iconId}.png`)
  iconImg.setAttribute("id", iconId)
  return iconImg
}

function clearIconResults() {
  var gameResults = document.getElementById("result");
  var childCount = gameResults.childElementCount;
  for (var i = 0; i < childCount; i++) {
    gameResults.removeChild(gameResults.lastChild);
  }
}

function displayWins() {
  humanWins.innerHTML = `Wins: ${players[human].wins}`
  computerWins.innerHTML = `Wins: ${players[computer].wins}`
}

function displayHome() {
  altSubHeading.innerHTML = ""
  altSubHeading.innerHTML += "Choose your game!"
  show(difficultGame)
  show(classicGame)
  hide(classicGameIcons)
  hide(difficultGameIcons)
}