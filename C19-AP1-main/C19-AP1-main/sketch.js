var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var grupoPorta
var grupoApoio
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  ghost = createSprite (300, 200);
  ghost.addImage(ghostImg);
  ghost.scale = 0.5
  grupoApoio =new Group()
  grupoPorta =new Group()
}

function draw() {
  background("black");
  drawSprites();
  if (gameState == "play"){

  tower.velocityY = 1;
  if (keyDown ("space")){
  ghost.velocityY = -5
  }
  ghost.velocityY = ghost.velocityY +0.5
  if (keyDown ("left")){
    ghost.x = ghost.x -10
  }
  if (keyDown ("right")){
    ghost.x = ghost.x + 10
  }
  if(tower.y > 400){
      tower.y = 300
    }
    porta();
    if (ghost.isTouching (grupoPorta)){
    gameState = "over"
    }
  }
  else if(gameState=="over"){
    tower.velocityY = 0;
    grupoApoio.destroyEach()
    grupoPorta.destroyEach()
    ghost.destroy()
    tower.destroy()
    fill ("green")
    textSize(40)
    text("Game Over",230,300)
  }
 drawSprites();   
}

function porta (){

if (frameCount%200==0) {
  var porta = createSprite (300,-50);
  var apoio = createSprite (300,10);
  porta.addImage (doorImg)
  apoio.addImage (climberImg)
  porta.velocityY = 2
  apoio.velocityY = 2
  porta.x= Math.round (random (100,500))
  apoio.x= porta.x
  grupoApoio.add(apoio);
  grupoPorta.add(porta);
}

}