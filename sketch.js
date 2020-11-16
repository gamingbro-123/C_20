var rect1,rect2;
var fixedRect, movingRect;


function setup() 
{
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(500, 200, 50, 50);
  movingRect.shapeColor = "blue";

  rect1 = createSprite(300, 100, 50, 50);
  rect1.shapeColor = "blue";
  rect1.velocityX = 3;

  rect2 = createSprite(500, 100, 50, 50);
  rect2.shapeColor = "blue";
}

function draw() {
  background(220,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

console.log("Distance " + (movingRect.x-fixedRect.x));
console.log(" Width/2 " + (movingRect.width+fixedRect.width)/2)   


if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2
&& fixedRect.x-movingRect.x <= (movingRect.width+fixedRect.width)/2
&& movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2
&& fixedRect.y-movingRect.y <= (movingRect.height+fixedRect.height)/2 )
{
  console.log("Is Touching");
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else
{
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "blue";
}


if(rect1.x-rect2.x <= (rect1.width+rect2.width)/2
&& rect2.x-rect1.x <= (rect1.width+rect2.width)/2)
{
  rect1.velocityX = -1 * rect1.velocityX;
}


  drawSprites();
}