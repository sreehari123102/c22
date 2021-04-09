const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var myEngine, myWorld;
var ground,ball;
function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  var options={
isStatic:true

  }
ground=Bodies.rectangle(0,380,800,10,options);
World.add(myWorld,ground)
var ballOptions={
  restitution:0.5
}
ball=Bodies.circle(200,200,25,ballOptions);
World.add(myWorld,ball)
}
function draw() {
  background(255,255,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,10);  
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,25,25);
}