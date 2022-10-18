class Very_Easy{
    constructor(){
        this.playerScore = 0;
        this.computerScore = 0;
        this.gameState = -1;
        this.ChoicC = "null"
        this.ChoicP = "null"
        this.message1 = createElement("h2", 'USE THE BUTTONS BELOW TO SELECT YOUR MOVE TRY TO SCORE 10 POINTS FIRST AND WIN THE GAME GOOD LUCK!');
        this.ps = createElement("h2", 'Player Score' + this.playerScore)
        this.cs = createElement("h2", 'Computer Score' + this.computerScore)
    }

    start() {
    restartBtn.mousePressed(() =>{
       this.restart()
      })
    
      if(this.gameState === -1){
        this.message1.position(0, height/2 - 100)
        this.message1.class("msgtext");

        startBtn.show()
        
        startBtn.mousePressed(() => {
          this.gameState = 0
          console.log(this.gameState)
        })

        this.ps.hide()
        this.cs.hide()
      }
    
      if(this.PlayerScore === 10){
        this.playerWon()
      }
      if(this.ComputerScore === 10){
        this.computerWon()
      }
    
      if(this.gameState === 0 || this.gameState === 1 || this.gameState === 2 || this.gameState === 3 || this.gameState === 4){
        this.ps.position(200,300)
        this.cs.position(700,300)
      }
    
    if(this.gameState === 0 || this.gameState === 1 || this.gameState === 2 || this.gameState === 3){
    
      this.startBtn.hide()
      rockBtn.show()
      scissorBtn.show()
      paperBtn.show()
    
      Player.visible = true
      Computer.visible = true
    
      if(this.gameState === 1){
        this.chooseComputer()
        }
        if(this.gameState === 0){
          this.choosePlayer()
        }
        this.changePlayer()
        this.changeComputer()
    
        this.check()
    }
    }
    
    chooseComputer() {
      var rand = Math.round(random(1,3));
      switch(rand){
        case 1: ChoicC = "Rock"
        this.gameState = 2
        break;
        case 2: ChoicC = "Paper"
        this.gameState = 2
        break;
        case 3: ChoicC = "Scissor"
        this.gameState = 2
        break;
        default: break;
      }
    }
    
   choosePlayer() {
      RockBtn.mousePressed(() => {
        this.ChoicP = "Rock"
        this.gameState = 1
      })
      paperBtn.mousePressed(() => {
        this.ChoicP = "Paper"
        this.gameState = 1
      })
      scissorBtn.mousePressed(() => {
        this.ChoicP = "Scissor"
        this.gameState = 1
      })
    }
    
    changeComputer() {
    if(this.ChoicC === "Rock"){
      Computer.changeAnimation("CRock")
    }
    if(this.ChoicC === "Paper"){
      Computer.changeAnimation("CPaper")
    }
    if(this.ChoicC === "Scissor"){
      Computer.changeAnimation("CScissor")
    }
    }
    
    changePlayer() {
    if(this.ChoicP === "Rock"){
      Player.changeAnimation("PRock")
    }
    if(this.ChoicP === "Paper"){
      Player.changeAnimation("PPaper")
    }
    if(this.ChoicP === "Scissor"){
      Player.changeAnimation("PScissor")
    }
    }
    
    check() {
     if(this.ChoicC === "Rock"){
        if(this.ChoicP === "Rock"){
          text("Tie", 500,250)
        }
        if(this.ChoicP === "Paper"){
          text("Player got Point", 350,250)
          playerPoint()
        }
        if(this.ChoicP === "Scissor"){
          text("Computer got Point", 330,250)
          computerPoint()
        }
     }
    
     if(this.ChoicC === "Paper"){
      if(this.ChoicP === "Paper"){
        text("Tie", 500,250)
      }
      if(this.ChoicP === "Scissor"){
        text("Player got Point", 350,250)
        playerPoint()
      }
      if(this.ChoicP === "Rock"){
        text("Computer got Point", 330,250)
        computerPoint()
      }
    }
    
    if(this.ChoicC === "Scissor"){
      if(this.ChoicP === "Scissor"){
        text("Tie", 500,250)
      }
      if(this.ChoicP === "Rock"){
        text("Player got Point", 350,250)
        playerPoint()
      }
      if(this.ChoicP === "Paper"){
        text("Computer got Point", 330,250)
        computerPoint()
      }
    }
    }
    
    playerPoint() {
      if(this.gameState === 2){
        this.PlayerScore += 1
      }
      this.gameState = 3
    }
    
    computerPoint() {
      if(this.gameState === 2){
        this.ComputerScore += 1
      }
      this.gameState = 3
    }
    
    playerWon() {
        this.gameState = 4
      text("PLAYER WON!", 360, 250)
    }
    
    computerWon() {
        this.gameState = 4
      text("COMPUTER WON!", 330,250)
    }
    
    restart() {
        this.gameState = -1
    
      startBtn.show()
      rockBtn.hide()
      scissorBtn.hide()
      paperBtn.hide()
    
      Player.visible = false
      Computer.visible = false
    
      this.PlayerScore = 0
      this.ComputerScore = 0
    
      this.ChoicC = "null"
      this.ChoicP = "null"
    
      Player.changeAnimation("Player_Random")
      Computer.changeAnimation("Computer_Random")
    }
}