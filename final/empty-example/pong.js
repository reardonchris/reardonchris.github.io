var ball = {
  x: 30,
  y: 15,
  diam: 35,
  dx: 8,
  dy: 8,
}
var paddleL = {
  x: 5,
  y: 55,
  w: 20,
  h: 100,
};
var paddleR = {
  x: 1500,
  y: 100,
  w: 15,
  h: 150,
};
var dx = 15;
var dy = 15;
var paddleSpeed = 12;

function setup (){
    createCanvas(windowWidth, windowHeight)
    fill(255)
}

function draw(){
    background("black");
    createBall();
    createLeftPaddle();
    createRightPaddle();
    bounce();
}
function createBall(){
    fill(125)
    ellipse( ball.x, ball.y, ball.diam, ball.diam)
    ball.x = ball.x + dx;
    ball.y = ball.y + dy
}
function createLeftPaddle() {

    fill(125);
    rect(paddleL.x, paddleL.y, paddleL.w, paddleL.h);

    if (keyIsDown(90) === true) { //move paddle down
      if (paddleL.y + paddleL.h < height - 5) {
        paddleL.y = paddleL.y + paddleSpeed;
      }
    }
    if (keyIsDown(65) === true) { //move paddle up
      if (paddleL.y > 5) {
        paddleL.y = paddleL.y - paddleSpeed;
      }
    }
    if (ball.x - 12.5 < paddleL.x + paddleL.w && ball.y + 12.5 > paddleL.y && ball.y + 12.5 < paddleL.y + paddleL.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dx = dx * -1;
      ball.x = ball.x + dx;

    }
}
function createRightPaddle(){
  fill(125);
  rect(paddleR.x, paddleR.y, paddleR.w, paddleR.h);
   if (ball.x + 12.5 > paddleR.x && ball.y + 12.5 > paddleR.y && ball.y + 12.5 < paddleR.y + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dx = dx * -1;
      ball.x = ball.x + dx;
      print("bam");
    }

    else if (ball.y + 12.5 > paddleR.y && ball.y < paddleR.y + paddleR.y + paddleR.h && ball.x + 12.5 > paddleR.x && ball.x < paddleR.x + paddleR.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dy = dy * -1;
      ball.y = ball.y + dy;
    }

    else if (ball.y + 12.5 < paddleR.y + paddleR.h && ball.y > paddleR.y && ball.x > paddleR.x && ball.x < paddleR.x + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dy = dy * -1;
      ball.y = ball.y + dy;
    }
     if (keyIsDown(76) === true) { //move paddle down
      if (paddleR.y + paddleR.h < height - 5) {
        paddleR.y = paddleR.y + paddleSpeed;
      }
    }
    if (keyIsDown(75) === true) { //move paddle up
      if (paddleR.y > 5) {
        paddleR.y = paddleR.y - paddleSpeed;
      }
    }
}

function bounce(){
    if (ball.y + 12.5 > height || ball.y < 12.5 && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      dy = dy * -1;
      ball.y = ball.y + dy;
    }


}