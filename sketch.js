var backgroundImage, title, titleImg, backgroundMusic
var Player, PlayerImg, PlayerRock, PlayerPaper, PlayerScissor
var Computer, ComputerImg, ComputerRock, ComputerPaper, ComputerScissor
var very_easy, easy, normal, hard, very_hard, extreme
var rockBtn, paperBtn, scissorBtn, startBtn
var restartBtn

function preload(){
  backgroundImage = loadImage("assets/background.jpg")
  titleImg = loadImage("assets/Title.png")
  PlayerImg = loadAnimation("assets/Scissor1.png", "assets/Rock1.png", "assets/Paper1.png")
  PlayerScissor = loadAnimation("assets/Scissor1.png")
  PlayerPaper = loadAnimation("assets/Paper1.png")
  PlayerRock = loadAnimation("assets/Rock1.png")
  ComputerImg = loadAnimation("assets/Scissor.png", "assets/Rock.png", "assets/Paper.png")
  ComputerRock = loadAnimation("assets/Rock.png")
  ComputerPaper = loadAnimation("assets/Paper.png")
  ComputerScissor = loadAnimation("assets/Scissor.png")
  backgroundMusic = loadSound("assets/music.mp3")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  form = new Form()
  form.display()

  Player = createSprite(180, 250, 10, 10)
  Player.addAnimation("Player_Random",PlayerImg)
  Player.addAnimation("PRock", PlayerRock)
  Player.addAnimation("PPaper", PlayerPaper)
  Player.addAnimation("PScissor", PlayerScissor)
  Player.scale = 0.4
  Player.visible = false

  Computer = createSprite(820, 250, 10, 10)
  Computer.addAnimation("Computer_Random",ComputerImg)
  Computer.addAnimation("CRock", ComputerRock)
  Computer.addAnimation("CPaper", ComputerPaper)
  Computer.addAnimation("CScissor", ComputerScissor)
  Computer.scale = 0.4
  Computer.visible = false

  startBtn = createButton("Start")
  startBtn.position(width/2 -100, height/2 + 50)
  startBtn.class("customButton")
  startBtn.hide()

  rockBtn = createButton("ROCK")
  rockBtn.position(50,400)
  rockBtn.class("customButton")
  rockBtn.hide()

  paperBtn = createButton("PAPER")
  paperBtn.position(400,400)
  paperBtn.class("customButton")
  paperBtn.hide()

  scissorBtn = createButton("SCISSOR")
  scissorBtn.position(750,400)
  scissorBtn.class("customButton")
  scissorBtn.hide()

  restartBtn = createButton("")
  restartBtn.position(10,30,10,10)
  restartBtn.class("restartButton")
  restartBtn.hide()

  backgroundMusic.loop
}

function draw() {
  background(rgb(66, 135, 245));
  image(backgroundImage, 0, 0, width, height)
  title = createSprite(width/2, height/14, 10, 10)
  title.addImage(titleImg)
  title.scale = 0.4

  if(form.veP === true){
    very_easy = new Very_Easy
    very_easy.start()
  }

  /*if(!backgroundMusic.isPlaying()){
    backgroundMusic.play()
    }*/
  
 drawSprites();
}