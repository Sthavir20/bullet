var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 50, 50);
  bullet.shapeColor="white"
  thickness=random(22,83)
  wall=createSprite(1500,200,thickness,100)
  speed=random(55,90)
  weight=random(400,1500)
  bullet.velocityX=speed
}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
bullet.velocityX=0
var def=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(def>10){
  bullet.shapeColor="red"
}

if(def<10){
  bullet.shapeColor="green"
}
  }
  drawSprites();
}