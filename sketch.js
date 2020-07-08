var thickness, wall;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  thickness = random (22,83);
  speed = random(223,321);
  weight = random(32,52);
bullet = createSprite(50, 200, 50, 20);
wall = createSprite(1200,200,thickness,height/2);
bullet.velocityX= speed;
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet , wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight * speed * speed/(thickness  * thickness  * thickness);
    if(damage >10){
      wall.shapeColor = color(255,0,0);
    }
   
    if(damage< 100){
      wall.shapeColor = color(0,255,0);
    }
  }
  bullet.display();
  wall.display();
  drawSprites();
}
function hasCollided(Lbullet ,Lwall)
{
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true ;
  }
  return false

}