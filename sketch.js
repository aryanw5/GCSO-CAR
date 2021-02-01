var car, wall;
var speed, weight;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  car = createSprite(100,200,30,30);
  car.shapeColor = "gray";

  wall = createSprite(300,200,30,70);
  wall.shapeColor = "gray";
}

function draw() {
  background(255,255,255); 
  
  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed;

  if(car.x - wall.x < (car.width - wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed/22500;
    if(deformation > 180)
  {
    car.shapeColor = color(255,0,0);
  }

  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0);
  }

  if(deformation < 180)
  {
    car.shapeColor = color(0,255,0);
  }
  drawSprites();
}