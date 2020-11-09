
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var l_box,m_box,r_box,ground,paper,paper_image;

function preload()
{
	//paper_image=loadImage('Crumpled Paper.jpg');
}

function setup() {
	createCanvas(800, 700);
	console.log("Hello");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,650,800,10);
	l_box=new Dustbin(560,600,20,90);
	m_box=new Dustbin(630,635,110,20);
	r_box=new Dustbin(700,600,20,90);
	paper=new Paper(170,620,10);
	console.log(paper);
	//paper.scale=0.5;
	//paper.addImage(paper_image)
	//paper.scale=0.3



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  l_box.display();
  m_box.display();
  r_box.display();
  
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-13});
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-13,y:-15});
	}
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:0});
	}
	if(keyCode===57){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:-20});
	}
}


