var fixedRect,movingRect,movingRect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  movingRect2=createSprite(300,200,50,30);
  movingRect2.velocityX=-2
  

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(isTouching(movingRect,fixedRect)){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
 }
 else
 {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
if(isTouching(fixedRect,movingRect2)){
  fixedRect.shapeColor = "red";
  movingRect2.shapeColor = "red";
}
else
{
  fixedRect.shapeColor = "green";
  movingRect2.shapeColor = "green";
}

  drawSprites();
}

