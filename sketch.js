var movingrect, fixedrect

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);

}

function draw() {
  background("black");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  
  movingrect.debug = true;
  fixedrect.debug = true;
   
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
      
      movingrect.shapeColor = "red";
      fixedrect.shapeColor = "red";
    } else{
      movingrect.shapeColor = "green";
      fixedrect.shapeColor = "green";
    }
  drawSprites();
}