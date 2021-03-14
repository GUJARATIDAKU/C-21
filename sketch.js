var fixedRect,fixedRect2,fixedRect3,fixedRect4, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(400, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(500, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  fixedRect4 = createSprite(600, 400, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(istouching(movingRect,fixedRect2)){
  movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
 }
 else if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else if(istouching(movingRect,fixedRect3)){
  movingRect.shapeColor = "red";
  fixedRect3.shapeColor = "red";
 }
 else if(istouching(movingRect,fixedRect4)){
  movingRect.shapeColor = "red";
  fixedRect4.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
  fixedRect.shapeColor = "green"; 
  fixedRect3.shapeColor = "green"; 
  fixedRect4.shapeColor = "green"; 
 }

  drawSprites();
}

