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

  if (roll === 1 || roll === 0) {
    this.scorePerTurn = 0
    // break
  }
  else {
    this.scorePerTurn = roll
    // continue
  }
}

Player.prototype.hold = function(){
  this.totalScore += roll
}


//USER LOGIC
$(document).ready(function(){
  $("#player1Form").submit(function(event){
    event.preventDefault()
    var playerName1 = $("#player1").val()
    var player1 = new Player(playerName1)
    $("#player1Display").html(player1.name)
    $("#player1Display, #totalScore1").show()
    $("#player1, #sendPlayer1Name").hide()

    $("#roll1").click(function(){
      $("#roll2,#hold2").prop("disabled", true)
      player1.rollAction()
      $("#roll2,#hold2").prop("disabled", true)
    })
    $("#hold1").click(function(){
      $("#roll1, #hold1").prop("disabled", true)
      $("#roll2, #hold2").prop("disabled", false)
      player1.hold()
    })
  })

  $("#player2Form").submit(function(event){
    event.preventDefault()
    var playerName2 = $("#player2").val()
    var player2 = new Player(playerName2)
    $("#player2Display").html(player2.name)
    $("#player2Display, #totalScore2").show()
    $("#player2, #sendPlayer2Name").hide()
  })
})
