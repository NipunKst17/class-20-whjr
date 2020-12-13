var car,wall,weight,speed;
var weight1,deformation;
var state = "start";

function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

}

function preload(){
  
}

function draw() {
  background(255,255,255);  

  speed = Math.round(random(55,90));
  
  weight = Math.round(random(400,1500));

  if(state === "start"){
      text("press space to start",800,400);
      if(keyWentUp("space")){
        spawn();
        state = "play";speed = Math.round(random(55,90));
      }
  }

  if(car.isTouching(wall)){
    car.velocityX = 0;
    deformation = (0.5 * weight1 * speedC * speedC / 22500);
   // text(deformation,800,400);
    
    if(deformation < 100){
        car.shapeColor = "green";
    }

    if((deformation === 100)||((deformation > 100) && (deformation < 180))||(deformation === 180)){
        car.shapeColor = "yellow";
    }

    if(deformation > 180){
       car.shapeColor = "red";
    }

  }

  drawSprites();
}


function spawn(){
    car.velocityX = speed;
    speedC = speed;
    weight1 = weight;
}