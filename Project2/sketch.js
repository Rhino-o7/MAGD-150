var screenWidth = 512;
var screenHeight = 512;

function setup() {
    
  createCanvas(screenWidth, screenHeight);
  background(0);
  colorMode(RGB, 255, 255, 255, 1);

  //Stars
  for (var i=0; i<1000; i++){

      var randAlpha = random(1);
      var randSize = random(0.3,2);
      var randR = random(170, 255);
      var randG = random(170, 255);
      var randB = random(170, 255);
      strokeWeight(0.5);
      stroke(25, 0.75);
      fill(randR, randG, randB, randAlpha);
      ellipse(random(512),random(512), randSize);

  }
  //Planet
  fill(43, 85, 236);
  strokeWeight(3);
  stroke(255,0.65);
  ellipse(screenWidth/2, screenHeight/5, 200);
  
  //Planet Gradient
  noStroke();
  for(var x =0.1; x<PI; x+= 0.1){
    fill(200, x/35); 
    arc(screenWidth/2, screenHeight/5, 200, 200, x, -x , OPEN);
  }
  
  
  
  //Flame
  fill(255, 117, 0);
  stroke(250, 192, 0);
  beginShape();
  vertex(screenWidth/2 -20, screenHeight/2 + 148);
  vertex(screenWidth/2 +20, screenHeight/2 + 148);
  vertex(screenWidth/2 +17, screenHeight/2 + 180);
  vertex(screenWidth/2 + 10, screenHeight/2 + 175);
  vertex(screenWidth/2, screenHeight/2 + 195);
  vertex(screenWidth/2 - 10, screenHeight/2 + 175);
  vertex(screenWidth/2 -17, screenHeight/2 + 180);
  endShape(CLOSE);
  
  fill(182, 34, 3);
  stroke(252, 100, 0);
  beginShape();
  vertex(screenWidth/2 -15, screenHeight/2 + 148);
  vertex(screenWidth/2 +15, screenHeight/2 + 148);
  vertex(screenWidth/2 +15, screenHeight/2 + 175);
  vertex(screenWidth/2 + 5, screenHeight/2 + 170);
  vertex(screenWidth/2, screenHeight/2 + 187);
  vertex(screenWidth/2 - 5, screenHeight/2 + 170);
  vertex(screenWidth/2 -15, screenHeight/2 + 175);
  endShape(CLOSE);
  
  //Ship
  stroke(255,0.75);
  fill(50,50,50);
  triangle(screenWidth/2 -25, screenHeight/2 + 75,
           screenWidth/2,     screenHeight/2 + 25,
           screenWidth/2 +25, screenHeight/2 + 75);
  
  quad(screenWidth/2 -25, screenHeight/2 + 75,
       screenWidth/2 -30, screenHeight/2 + 135,
       screenWidth/2 +30, screenHeight/2 + 135,
       screenWidth/2 +25, screenHeight/2 + 75);
  
  quad(screenWidth/2 -20, screenHeight/2 + 135,
       screenWidth/2 -25, screenHeight/2 + 150,
       screenWidth/2 +25, screenHeight/2 + 150,
       screenWidth/2 +20, screenHeight/2 + 135);
  
  fill(255,233,0);
  stroke(255);
  ellipse(screenWidth/2, screenHeight/2 + 100, 30);
  
}

function draw(){
  
}


