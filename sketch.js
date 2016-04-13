var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.0001;

function setup() {
 createCanvas(640, 360);

 
}

function draw() {
  background(255);
  translate(width/2, height/2);
  rotate(angle);

  stroke(0);
  strokeWeight(2);
  fill(127);

  line(-60,0,60,0);
  ellipse(60,0,16,16);
  ellipse(-60,0,16,16);

//location = location + velocity
//velocity = velocity + acceleration
//Applied to angular motion we get:
//angle = angle + angular velocity
//angular velocity = angular velocity + angular acceleration

  angle +=aVelocity;
  aVelocity += aAcceleration;
  
  }




