let ball;
let paddle1;

function setup() {
  createCanvas(600,400);
  ball = new Ball();
  paddle1 = new Paddle(40,150);
}

function draw() {
  background(0);
  ball.show();
  ball.update();
  paddle1.show();

  if(paddle1.hits(ball)) {
    ball.xspeed = random(3,5);
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    paddle1.pos.y -= 30;
  } else if(keyCode === DOWN_ARROW) {
    paddle1.pos.y += 30;
  }
}
