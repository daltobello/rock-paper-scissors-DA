// querySelectors
var humanPlayer = document.querySelector(".human-player")
var computerPlayer = document.querySelector(".computer-player")
var classicGameOption = document.querySelector(".classic")
var difficultGameOption = document.querySelector(".difficult")

// eventListeners
classicGameOption.addEventListener("click", function(){
  hideElement(classicGameOption)
})
// global variables

var gameBoard;
// assign gameboard to gameBoard function?

// functions


function createPlayer(name, token) {
  var player = {
    name: name,
    token: token,
    wins: 0
  }
  return player
}

function createGame(player1, player2) {
  // track the players turn
  // keep track of the plays
  // the game type
  // that will tell us which game to turn
  // call takeTurn function
}

// function takeTurn() {

// }

// GAME LOGIC
// rock beats scissors, scissors beat paper, and paper beats rock.

// if player1 is rock and player2 is scissors, player1 wins
        // else if player2 is paper, player2 wins
            // else if player2 is 
// if player1 is scissors and player2 is paper, player1 wins
      //  else if player2
// if player1  is paper and player2 is rock, player1 wins






function hideElement(element) {
  element.classList.add("hidden")
}
