//BUSINESS LOGIC
//object class
function Player(name){
  this.name = name,
  this.scorePerTurn = 0,
  this.totalScore = 0
}

Player.prototype.rollAction = function(){// maybe a prototype of sort
  //function to generate random numbers for each roll of the dice
  var roll = Math.floor(Math.random()*6) + 1
  if (roll === 1) {
    this.scorePerTurn = 0
  }
  else {
    this.scorePerTurn = roll
  }
  return this.scorePerTurn
}

Player.prototype.hold = function(){
  this.totalScore += this.scorePerTurn
  return this.totalScore
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
      // $("#turnDisplay").text(player1.rollAction())
      if (player1.rollAction() === 0) {
        $("#roll1,#hold1").prop("disabled", true)
        $("#roll2,#hold2").prop("disabled", false)
      }
      else{
        $("#roll1,#hold1").prop("disabled", false)
        $("#roll2,#hold2").prop("disabled", true)
      }
      $("#turnDisplay").text(player1.rollAction())
    })

    $("#hold1").click(function(){
      $("#roll1, #hold1").prop("disabled", true)
      $("#roll2, #hold2").prop("disabled", false)
      $("#totalScore1").text(player1.hold())
    })
  })

  $("#player2Form").submit(function(event){
    event.preventDefault()
    var playerName2 = $("#player2").val()
    var player2 = new Player(playerName2)
    $("#player2Display").html(player2.name)
    $("#player2Display, #totalScore2").show()
    $("#player2, #sendPlayer2Name").hide()

    $("#roll2").click(function(){
      $("#roll1,#hold1").prop("disabled", true)
      // $("#turnDisplay").text(player1.rollAction())
      if (player2.rollAction() === 0) {
        $("#roll2,#hold2").prop("disabled", true)
        $("#roll1,#hold1").prop("disabled", false)
      }
      else{
        $("#roll2,#hold2").prop("disabled", false)
        $("#roll1,#hold1").prop("disabled", true)
      }
      $("#turnDisplay").text(player2.rollAction())
    })

    $("#hold2").click(function(){
      $("#roll2, #hold2").prop("disabled", true)
      $("#roll1, #hold1").prop("disabled", false)
      $("#totalScore2").text(player2.hold())
    })
  })
})
