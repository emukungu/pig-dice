//BUSINESS LOGIC
//object class
function Player(name){
  this.name = name,
  this.scorePerTurn = 0,
  this.totalScore = 0
}

function roll(){// maybe a prototype of sort
  //function to generate random numbers for each roll of the dice
  var roll = Math.floor((Math.random()*20) + 0)

  if (roll === 1) {
    this.totalScore += 0
    this.scorePerTurn = 0
  }
  else {
    this.totalScore += roll
    this.scorePerTurn = roll
  }
}

function hold1(){
  $("#hold1").click(function(){
    $("#roll1,#hold1").prop("disabled", true)
    $("#roll2, #hold2").prop("disabled", false)
  })
}

function hold2(){
  $("#hold2").click(function(){
    $("#roll2,#hold2").prop("disabled", true)
    $("#roll1, #hold1").prop("disabled", false)
  })
}


//USER LOGIC
