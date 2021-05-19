const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine , myWorld , box1 , box2 , ground1 , pig1 , log1 , pig2 , log2 , box3 , box4 , box5 , log3 , log4 , bird1;
var backgroundImg,platform,slingshot,constrainedLog , gameState = "onSling" , score = 0;

function preload() {
 //  backgroundImg = loadImage("Sprites/bg.png");
   setBackgroundImg();
}


function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
   myEngine = Engine.create();
   myWorld = myEngine.world;
   box1 = new box (700,320,70,70);
   box2 = new box (920,320,70,70);
  ground1 = new ground (600,390,1200,20);
  pig1 = new pig (810,350);
  log1 = new log (810,260,300,PI/2);
  box3 = new box (700,240,70,70);
  box4 = new box (920,240,70,70);
  pig2 = new pig (810,220);
  log2 = new log (810,180,300,PI/2);
  box5 = new box (810,160,70,70);
  log3 = new log (730,100,150,PI/7);
  log4 = new log (910,120,150,-PI/6);
  bird1 = new bird (200,50);
  platform = new ground(120,300,400,150);
 // constrainedLog = new log(230,180,80,PI/2);
  slingshot = new SlingShot (bird1.body,{x:200,y:50});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  box1.display();
  ground1.display();
 box2.display();
 pig1.display();
 pig1.score();
 log1.display();
 box3.display();
 box4.display();
 pig2.display();
 pig2.score();
 log2.display();
 log3.display();
 log4.display();
 box5.display(); 
 bird1.display();
 platform.display();
// constrainedLog.display();
 //chain1.display();
 slingshot.display();
  Engine.update(myEngine);
  //drawSprites();
  fill("white");
  textSize(20);
  text("Score : " + score , width-200, 50);
}

function mouseDragged() {
  if(gameState !== "launched") {
    Matter.Body.setPosition(bird1.body,{x: mouseX , y: mouseY});
  }

} 

function mouseReleased() {
  slingshot.fly();
  gameState = "launched";
}

function keyPressed() {
  gameState = "onSling" ;
  if(keyCode === 32 && gameState !== "launched") {
   slingshot.attach(bird1.body);
   gameState = "launched";
  }
}

async function setBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,16);
  console.log(hour);

  if(hour>="14:44" && hour<="14:55") {
    bg = "sprites/bg.png";   
  } else {
    bg = "sprites/bg2.png";
  }
    backgroundImg = loadImage(bg);
}