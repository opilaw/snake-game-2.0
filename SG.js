
// window.onload = function(){
// const canvas = document.getElementById("game");
 //const ctx = canvas.getContext("2d");
// drawGame();
// }

// let speed= 5;

// //game loop
// function drawGame()
// {
//  console.log('draw game');
//  clearScreen();
//  setTimeout(drawGame, 1000/speed);
// }

// function clearScreen(){
//     ctx.fillStyle= 'black';
//     ctx.fillRect= (0,0, canvas.width, canvas.height);
// }


var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

function getStart() {

    
    if (!canvas) {
      alert('Error: Cannot find the canvas element!');
      return;
    }

    if (!canvas.getContext) {
      alert('Error: Canvas context does not exist!');
      return;
    }

    console.log(canvas.width)
  
  }

class SnakePart{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}

let speed = 7;
      
      let tileCount = 20;
      let tileSize = canvas.width / tileCount - 2;
      
      let headX = 10;
      let headY = 10;
      const snakeParts = [];
      let tailLength = 2;

      let appleX=5;
      let appleY=5;
      
      let xVelocity=0;
      let yVelocity=0;
   

      let score=0;
  
      
      //drawGame();

//     let speed= 5;
//     let tileCount= 20;
//     let tileSize= 200/ tileCount- 20;
//     let headX= 10;
//     let headY= 10;

function drawGame(){
  changeSnakePosition();
  let result=isGameOver();
    if(result){
      return;
    }
  
    clearScreen()
    checkAppleCollision()
    setTimeout(drawGame, 1000/speed);
    drawSnake();
    drawApple();
    drawScore();
}
function isGameOver(){
  let GameOver=false;
  //walls
  if (headX<0){
    gameOver();
  }
}

function drawScore(){
  ctx.fillStyle="black";
  ctx.font="10px Verdana";
  ctx.fillText("Score "+ score, canvas.width-50, 10)
}
function  clearScreen(){
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
    ctx.fillStyle= "green";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
    ctx.fillStyle="light purple";
    for (i=0; i<snakeParts.length; i++){
      let part= snakeParts [i];
      ctx.fillRect(part.x*tileCount, part.y*tileCount, tileSize, tileSize)
    }
    snakeParts.push(new SnakePart(headX, headY));//put the item at the end of the list next to the head
    if(snakeParts.length>tailLength){
      snakeParts.shift();//remove the furthest item from the snake part if have more than tail size
    }
}


function changeSnakePosition(){
  headX= headX+xVelocity;
  headY= headY+yVelocity;
}

function drawApple(){
  ctx.fillStyle="yellow";
  ctx.fillRect(appleX * tileCount, appleY *tileCount, tileSize, tileSize)
}
function checkAppleCollision(){
  if (appleX===headX && appleY===headY){
    appleX=Math.floor(Math.random()* tileCount);
    appleY=Math.floor(Math.random()* tileCount);
    tailLength++;
    score++;
  }
}
document.body.addEventListener('keydown', keyDown);

function keyDown(event){
  //up
  if (event.keyCode== 38){
    if (yVelocity==1)
      return;
    yVelocity= -1;
    xVelocity= 0;
  }
  //down
  if (event.keyCode== 40){
    if (yVelocity==-1)
      return;
    yVelocity= 1;
    xVelocity= 0;
}
 //left
 if (event.keyCode== 37){
  if (xVelocity==1)
  return;
  yVelocity= 0;
  xVelocity= -1;
}
 //right
 if (event.keyCode== 39){
  if (xVelocity==-1)
  return;
  yVelocity= 0;
  xVelocity= 1;
}
}

getStart()
drawGame()

