var fixedRect, movingRect;
var fixedRect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "gray";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "gray";
  movingRect.debug = true;
  fixedRect2=createSprire(200,200,50,50)
  fixedRect2.shapeColor="red"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(bounce()===true){
    movingRect.shapeColor="cyan"
    fixedect.shapeColor="cyan"Rect.shapeColor="cyan"
  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  else{
    movingRect.shapeColor="gray"
    fixedRect.shapeColor="gray"
  }

  drawSprites();
}
function bounce(){
  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      return true;
  }
  else {
    return false;
  }
}