
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var engine;
var world;
var bob1Object;
var bob5object;
var bob3object;
var bob2object;
var bob5object;
var roof1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var base;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1Object = new Bob(110,450,80);
	
	bob3object = new Bob(190,450,80);
	bob2object = new Bob(270,450,80);
	bob4object = new Bob(350,450,80);
	bob5object = new Bob(430,450,80);
   
	roof1 = new Roof(300,100,500,20);

	rope1= new Rope(bob1Object.body,roof1.body,-180,0);
	rope2= new Rope(bob2object.body,roof1.body,-20,0);
	rope3= new Rope(bob3object.body,roof1.body,-100,0);
	rope4= new Rope(bob4object.body,roof1.body,60,0);
	rope5= new Rope(bob5object.body,roof1.body,140,0);

	base = new BaseClass(500,550,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1Object.display();
  bob2object.display();
  bob3object.display();
  bob4object.display();
  bob5object.display();

  roof1.display();
  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  base.display();

  keyPressed();
  


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1Object.body,bob1Object.body.position,{x:0,y:0});
	  Matter.Body.setStatic(bob1Object.body, false);

	}
  }
  
  


