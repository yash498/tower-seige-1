const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground,box1;
var polygon_img


function preload() { 
polygon_img=loadImage("polygon.png");


}




function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
Engine.run(engine)

	//Create the Bodies Here.

ground=new Ground(450,390,900,20);
box1=new Box(360,50,30,40);
box2=new Box(340,280,30,40);
box3=new Box(350,280,30,40);
box4=new Box(335,300,30,40);
box5=new Box(340,50,30,40);
box6=new Box(335,30,30,40);
box7=new Box(700,300,30,40);
box8=new Box(730,300,30,40);
box9=new Box(750,300,30,40);
box10=new Box(780,300,30,40);
box11=new Box(730,50,30,40);
box12=new Box(760,50,30,40);
box13=new Box(770,50,30,40);
box14=new Box(770,30,30,40);
ball=Bodies.circle(50,200,20);
World.add(world,ball);
slingShot=new SlingShot(this.ball,{x:100,y:200})
  
}


function draw() {
 
  background("white");
  Engine.update(engine)
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
slingShot.display();
imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingShot.fly();
  }








