
var PLAY =1
var END = 0
var gameState = PLAY;
var food
var head
var group = []
var edges;
var score= 0

function setup()
 {
  var canvas = createCanvas(400, 400);
   head = createSprite(200,200,10,10);
   head.scale = 2.5;
   head.shapeColor = "brown";
   head.velocityX = 2;
   group.push(head);
   
   var gameState = PLAY;
   var score = 0;
   
   food = createSprite(random(30,100),random(30,100),10,10);
   food.scale = 2.5;
   food.shapeColor = "red"
   
 }

function draw() {
  background(220);
  edges = createEdgeSprites();
  
   if(gameState === PLAY)
    {
     checkTouch();
     move();
    }
   
    if(gameState === END){
    background("brown");
    textSize(40);
    text("GAME OVER",80,200);
    head.destroy();
    group = []
    food.destroy();
  }

  fill("green");
  textSize(25);
  text("SCORE:  " +score,10,30);
    
  drawSprites();
}

function checkTouch()
  {
     if(head.isTouching(food))
     {
       food.x = Math.round((random(20,350)));
       food.y = Math.round((random(20,350)));
       var body = createSprite(200,200, 10, 10);
       group.push(body);
       score ++;
     }
      
    if (edges.isTouching(head))
    {  
      gameState = END;
      head.setSpeedAndDirection(0,0);
    }
  
  
    
 } for (var i = group.length - 1; i > 0; i--) {
    group[i].x = group[i-1].x;
    group[i].y = group[i-1].y;
 }

function move()
  {
      if (keyDown("up")) {
         head.setSpeedAndDirection(4, -90);
      }
      if (keyDown("down")) {
         head.setSpeedAndDirection(4, 90);
      }
      if (keyDown("left")) {
         head.setSpeedAndDirection(4, 180);
      }
      if (keyDown("right")) {
         head.setSpeedAndDirection(4, 0);
      }
  }

  