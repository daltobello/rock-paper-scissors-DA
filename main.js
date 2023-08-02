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
  // invoke createPlayer again with hard coded 
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
    var computerChoice = getRandomComputerMove()
  }
  checkForWIns(humanChoice, computerChoice)
}




function getRandomCover() {
  var getRandImgIndex = getRandomIndex(covers)
  var getRandTitleIndex = getRandomIndex(titles)
  var getRandTagIndex1 = getRandomIndex(descriptors)
  var getRandTagIndex2 = getRandomIndex(descriptors)
  var randImg = covers[getRandImgIndex]
  var randTitle = titles[getRandTitleIndex]
  var randTag1 = descriptors[getRandTagIndex1]
  var randTag2 = descriptors[getRandTagIndex2]
  return createCover(randImg, randTitle, randTag1, randTag2)
}






function checkForWIns(humanChoice, computerChoice) {
  if (humanChoice === "paper" or rock) // if rock or scissors draw or win. 
  // if win, congrats, increase wins
  // if not, invoke checkFordDraw function

    // use  var choice = classicGameBoard[0] as arg for check for wins, and check for draws. then evaluate who, 

  // player choose option from classic gameboard
  // then computer chooses
  // after every win, check for win and check for draw.
  // if win, update the player win count.
  // if draw, take another turn 

}

// randomize the computer choice. 
//  function getRandomIndex(array) {
  // gameBoard
// }


// GAME LOGIC
// rock beats scissors, scissors beat paper, and paper beats rock.
// if player1 is rock and player2 is scissors, player1 wins
// else if player2 is paper, player2 wins
// else if player2 is 
// if player1 is scissors and player2 is paper, player1 wins
//  else if player2
// if player1  is paper and player2 is rock, player1 wins

function getRandomComputerMove() {
  var randGameBoardIndex = getRandomIndex(gameBoard)
  return  gameBoard[randGameBoardIndex]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array)
}


