//BUSINESS LOGIC
//object class
function Player(name){
  this.name = name,
  this.scorePerTurn = 0,
  this.totalScore = 0
}

function roll(){
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





//USER LOGIC
