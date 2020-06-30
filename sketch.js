//Global Variables
var banana_img,obstacle_img,obstaclesGroup,score,bg,monkey,monkey_img,bg_real,ground,bananaGroup;


function preload(){
bg_real=loadImage('jungle.jpg'); 
monkey_img=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_img=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png")
}


function setup() {
  createCanvas(600,300);
  
  bg=createSprite();
  bg.addImage("real_img",bg_real);
  bg.velocityX=-2;
  
  ground=createSprite(300,260,800,10);
  ground.visible=false;
  
  monkey=createSprite(50,220);
  monkey.addAnimation("hi",monkey_img);
  monkey.scale=0.1
  
  bananaGroup=createGroup();
  score=0;
  obstaclesGroup=createGroup();
}


function draw(){
  if(bg.x<300){
    bg.x=bg.width/2;
  }
  if(keyDown("space")&&monkey.y>200){
  monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.6
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
      score=score+2;
  }
  
  switch(score){
    case 10 :monkey.scale=0.12;
             break;
    case 20 : monkey.scale=0.14;
              break;
    case 30 : monkey.scale=0.16; 
              break;
    case 40 :  monkey.scale=0.18;   
              break;
  } 
  
  if(obstaclesGroup.isTouching(monkey)){
  monkey.scale=0.1;
    score=0;
  }
  
  
  obstacle();
  banana();  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,500,50);
}

function banana(){
  if(frameCount%100===0){
    var banana=createSprite(750,random(90,150));
    banana.addImage(banana_img);
    banana.scale=0.05;
    banana.velocityX=-7;
    banana.lifeTime=200;
    
    banana.addToGroup(bananaGroup);
    
    
  }
}
function obstacle(){
  if(frameCount%300===0){
    var stone=createSprite(700,250);
    stone.addImage(obstacle_img);
    stone.scale=0.15;
    stone.velocityX=-4;
    obstaclesGroup.add(stone);
    stone.lifeTime=1000;
  }
}

