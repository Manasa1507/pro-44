

function preload() {
  f1car1 = loadImage("f1car1.png");
  f1car2 = loadImage("f1car2.png");
  f1car3 = loadImage("f1car3.png");
  f1car4 = loadImage("f1car4.png");
  f1car5 = loadImage("f1car5.png");
  road = loadImage("road.jpg");
}
function setup() {
  createCanvas(800,800);
  

   f1_car1 = createSprite(100,100);
   f1_car1.addImage(f1car1);
   
   road_img = createSprite(400,800);
   road_img.addImage(road);
   road_img.scale = 1



}




function draw() {
  background(255,255,255);  
  drawSprites();
  spawncars();
}

function spawncars(){
  if(frameCount%60===0){
   car = createSprite(200,700)
   car.x=Math.round(random(200,600))
   car.velocityY = -5
   car.scale = 0.4
   car.lifetime = 200
   var rand = Math.round(random(1,5))
   switch(rand){
   case 1: car.addImage(f1car1)
    break;
    case 2: car.addImage(f1car2)
     break;
     case 3: car.addImage(f1car3)
      break;
      case 4: car.addImage(f1car4)
      break;
      case 5: car.addImage(f1car5)
       break;
       default:break
       
   }

car.depth=road_img.depth



   

   }
  }






