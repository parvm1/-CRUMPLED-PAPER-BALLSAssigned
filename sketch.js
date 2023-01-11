
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left;
var right;
var ball_options;
var ground_options;
var btn1,btn2;
let engine;
let world;


function preload()
{
	
}	


function setup() {
	createCanvas(800, 600);
	//groundObj = new Ground(190,400,20,20);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		 //isStatic:true,
		//friction:0,
		//density:5.2,
		restitution:0.3
	}

	
	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
  	World.add(world,ball)
	groundObj = new Ground(400,580,780,10);
	left = new Ground(500, 525, 10, 100);
	right = new Ground(650, 525, 10, 100);

	
	btn1 = createImg('right.png');
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hForce)
	

	btn2 = createImg('up.png');
	btn2.position(20,30);
	btn2.size(50,50);
	btn2.mouseClicked(vForce)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);

  groundObj.show();
  left.show();
  right.show();

  if (keyIsDown(UP_ARROW)) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}

  if (keyIsDown(RIGHT_ARROW)) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.003,y:0})
	}
  //drawSprites();
  //console.log(keyDown("up"));
  
  /*
  if(keyDown("UP_ARROW")){
		console.log('Up Arrow Key Pressed!!');
		console.log('ball.position.x : ' + ball.position.x);
		console.log('ball.position.y : ' + ball.position.y);
		//alert('Up Arrow Key Pressed!!');
		//Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		Matter.Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.05});
  	}
	*/
	
  

}
function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.033,y:0})
  }

function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  }
