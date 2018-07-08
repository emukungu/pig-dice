//BUSINESS LOGIC
//object class
function Player(name){
  this.name = name,
  this.scorePerTurn = 0,
  this.totalScore = 0
}

Player.prototype.rollAction = function(){// maybe a prototype of sort
  //function to generate random numbers for each roll of the dice
  var roll = Math.floor((Math.random()*20) + 0)

  if (roll === 1 && roll === 0) {
    this.scorePerTurn = 0
    break;
  }
  else {
    this.scorePerTurn = roll
    continue
  }
}

Player.prototype.hold = function(){
  this.totalScore += roll
}


//USER LOGIC
$(document).ready(function(){
  //get player names from form
  var playerName1 = $("#player1").val()
  var playerName2 = $("#player2").val()
  //players signin
  var player1 = new Player(playerName1)
  var player2 = new Player(playerName2)
  //Display players
  $("p#player1Display, #totalScore1").show()
  $("p#player2Display, #totalScore2").show()
  $("input#player1").hide()
  $("input#player2").hide()
  //All buttons enabled at start
  $("#roll1").prop("disabled", false)
  $("#hold1").prop("disabled", false)
  $("#roll2").prop("disabled", false)
  $("#hold2").prop("disabled", false)
  //player1 rolls
  $("#roll1").click(function(){
    $("#roll2,#hold2").prop("disabled", true)
    player1.rollAction()
    $("#roll2,#hold2").prop("disabled", true)
  })
  //player1 holds
  $("#hold1").click(function(){
    $("#roll1, #hold1").prop("disabled", true)
    $("#roll2, #hold2").prop("disabled", false)
    player1.hold()
  })
})
