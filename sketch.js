const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var back= "bg.png";
var score=0;

function preload(){
  polygonImg=loadImage("polygon.png");
  getBackground();
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

 ground=new Ground(400,350,800,20);
 stand= new Ground(360,270,170,10);

 //lower row
  box1= new Box(300,245,30,40);  
  box2= new Box(330,245,30,40);
  box3= new Box(360,245,30,40);
  box4= new Box(390,245,30,40);
  box5= new Box(420,245,30,40);
  //middle row
  box6= new Box(330,205,30,40);
  box7= new Box(360,205,30,40);
  box8= new Box(390,205,30,40);
  //top row
  box9= new Box(360,165,30,40);

  polygon = Bodies.circle(100,50,30);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:50});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  } 
  textSize(20);
  text("Score: "+ score,650,60); 
  Engine.update(engine);

  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

  imageMode(CENTER)
  image(polygonImg ,polygon.position.x,polygon.position.y,40,40);


  slingShot.display();

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.Attach(polygon.body);
    Matter.Body.setPosition(this.polygon,{x:100,y:50});
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime= responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <= 18){
      back = "bg.png"; 
  } else {
      back = "bg2.jpg";
  }
  backgroundImg=loadImage(back);
}
