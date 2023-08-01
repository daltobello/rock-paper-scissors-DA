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

// functions


function createPlayer(name, token, wins) {
  var player = {
    name: name,
    token: token,
    wins: wins
  }
  return player
}

function hideElement(element) {
  element.classList.add("hidden")
}
