let fr = 60;
let arr = [];
let pumpCount = 25;
function setup() {
  createCanvas(600, 600);
  frameRate(fr);
  colorMode(RGB, 255,255,255, 1);
  for (let i=0; i<pumpCount; i++){
    arr[i] = new pump(random(0, width), random(0,height));
    print(arr[i]);
  }
  print(arr);
}

function draw() {
  background(50);
  for (let i=0; i<pumpCount; i++){
    arr[i].drawPump();
    let d = dist(mouseX, mouseY, arr[i].posX, arr[i].getY());
    //line(mouseX,mouseY,arr[i].posX, arr[i].getY());
    if (d < 130/2){
      arr[i].drawFace();
    }
    
  }
}

function pump(posX, posY){
  this.posX = posX;
  this.posY = posY;
    
  this.drawPump = function(){
    push();
    fill(150, 75, 0);
    strokeWeight(1.5);
    quad(posX-10, posY-40, posX-10, posY-75, posX, posY-75, posX+10, posY-40);
    fill(220,140,0);
    ellipse(posX-35, posY, 50, 100);
    ellipse(posX+35, posY, 50, 100);
    ellipse(posX-20, posY, 50, 110);
    ellipse(posX+20, posY, 50, 110);
    ellipse(posX, posY, 50, 115);
    pop();
    
  this.drawFace = function(){
    fill(0);
    triangle(posX-10, posY+10, posX, posY-5, posX+10, posY+10);
    
    triangle(posX-35, posY-10, posX-20, posY-30, posX-5, posY-10);
    triangle(posX+35, posY-10, posX+20, posY-30, posX+5, posY-10);
    
    beginShape();
    vertex(posX-30,posY + 20);
    vertex(posX-20,posY+35);
    vertex(posX+20,posY+35);
    vertex(posX+30,posY + 20);
    vertex(posX,posY+30);
    endShape(CLOSE); 
  }
    
    if (posY<height+100){
      posY+= 5;
    }else{
      posY = -50;
    }
    
  }
  this.getY = function(){
    return posY;
  }
}
