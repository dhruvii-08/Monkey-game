
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;  
  
  //create groups
  banana=createGroup();
}

function draw() {
  
 background ("white");
  
    //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  //console.log(ground.x);

    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12; 
     }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(frameCount %80 === 0){
     var banana = createSprite(300,330,20,20);
     banana.addImage("banana",bananaImage);
     banana.velocityX=-2;
     banana.scale=0.1;
     banana.lifetime=150;
     }
  
  if(frameCount % 300 === 0){
     var obstaclesGroup = createSprite(300,330,20,20);
     obstaclesGroup.addImage = ("obstacles",obstacleImage);
     obstaclesGroup.scale=0.1;
     obstaclesGroup.lifetime = 150;
     }
  
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  console.log(survivalTime);
  
drawSprites();  
  if(survivalTime!==Infinity)
    {
  text("Survival Time:" + survivalTime, 100, 50);
    }
}






