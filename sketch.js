var movingrect;
var fixedrect;



function setup()
{
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green";
  fixedrect = createSprite(100,200,50,50)
  fixedrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2  && 
     fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2  &&
     movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
     
  {
    fixedrect.shapeColor = "red";
  }
  else
  {
    fixedrect.shapeColor = "green";
  }

  drawSprites();
}