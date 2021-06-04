

var car,ship,aeroplane;

var carimg,shipimg,shipimg;
var roadimg,lawaimg,waterimg;
var road,lawa,water;

var score;
var scene;

var jumpSound , checkPointSound, dieSound;

var PLAY =1;
var END =0;
var gameState =0;
var isSceneChanged = "false";

function preload(){
 aeroplaneimg = loadImage("blimp_03.png");
 carimg = loadImage  ("monstertruck_03.png");
 shipimg =loadImage("ship_02.png");

 roadimg=loadAnimation("car-luggage-road-hd-animation-footage-088920201_iconl.webp");
 lawaimg=loadAnimation("lava.jpg");
 waterimg=loadAnimation("water_img.png");
  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3");
}

function setup() {
  createCanvas(800,400);
  
  car = createSprite(50,370,50,50);
  car.addImage(carimg);

  aeroplane=createSprite(50,60,50,50);
  aeroplane.addImage(aeroplaneimg);

  ship=createSprite(50,390,70,70)
  ship.addImage(shipimg);

  scene=createSprite(400,200,800,400);
  scene.addAnimation("road",roadimg);  
  scene.addAnimation("water",waterimg);  
  scene.addAnimation("lava",lawaimg);
    
  scene.x=scene.width/2;
  scene.scale=1.5;
  scene.velocityX=-5;

}
function draw() {

   background("white");

  if(gameState === END){
        //add text to tell how the start the start the game
      text=("Press Space bar to Start Game",400,200);

      if(keyDown("space"))
      gameState = PLAY;

      //make car ship and airplane invisible
      car.visible ='false';
      ship.visible='false';
      aeroplane.visible='false';
  }
  else if(gameState === PLAY){

      scene.changeAnimation("road",roadimg); 
      car.visible='true';

      if(scene.x < 0){
        scene.x=scene.width/2;
      }


      if(frameCount % 60=== 0){

        changeScene();
        isSceneChanged = "true";

      }

   

     

      

     


}//this is end of gamestate play
    drawSprites()
}
 

function changeScene(){

  var toChange = Math.round(random(1,3));

      switch(toChange) {

        case 1: scene.changeAnimation("water",waterimg);
                break;
        case 2: scene.changeAnimation("lava",lawaimg);
                break;
        case 3: scene.changeAnimation("road",roadimg); 
                break;
        default : break;
}
}