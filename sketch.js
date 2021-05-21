
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    

	Engine.run(engine);
  
}

function preload(){
	paper = loadImage("paper.png");
	
	
}

function draw() {
  rectMode(CENTER);
  background(230);
  image(paper,30,170,60,60);
 position.x = mouseX;
 position.y = mouseY;

  groundObject.display();
  dustbinObj.display();

}

