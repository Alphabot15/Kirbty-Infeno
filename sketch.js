var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var score=0;
//Game States
var PLAY=1;
var END=0;
var gameState=1;


function preload(){
  pathImg = loadImage("kirbyFondo.jpeg");
  boyImg = loadAnimation("kirby2.png","kirby3.png");
  cashImg = loadImage("tomate.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("gordo.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(500,700);
// Moving background
path=createSprite(250,300);
path.addImage(pathImg);
path.scale=0.6;


//creating boy running
boy = createSprite(250,600,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.7;
  
  
cashG=new Group();
swordGroup=new Group();

score = 0;
}

function draw() {

  if(gameState===PLAY){
  background(0);
boy.x = World.mouseX;
score = score + Math.round(getFrameRate()/60);    
  edges= createEdgeSprites();
  boy.collide(edges);
  

    createCash();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
 
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.8;
        
        cashG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("TomatesM: "+ treasureCollection,width-500,30);
  text("Puntuación: "+ score, 350,30);
  }

}
function createCash() {
  if (World.frameCount % 100 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.3;
  cash.velocityY = 3;
  cash.lifetime = 1000;
  cashG.add(cash);
  }
}

function createSword(){
  if (World.frameCount % 10 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.3;
  sword.velocityY = 10;
  sword.lifetime = 1000;
  swordGroup.add(sword);
  }
}