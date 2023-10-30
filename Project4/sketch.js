let fr = 60;
let rectCount = 0;
let mouseDown = false;
let arr = [];
let speedMult = 4;

function setup() {
    frameRate(fr);
    createCanvas(512, 512);
    colorMode(RGB, 255, 255, 255, 1);
}


function draw() {
    background(0);
    drawRects();

    if(mouseDown){
        fill(200);
        rect(mouseX-25, mouseY-25, 50, 50);
    }
}
function mousePressed() {
    mouseDown = true;
}

function mouseClicked(){
    arr[rectCount] = createVector(mouseX,mouseY, 1);
    rectCount++;
    mouseDown = false;
}

function drawRects(){

    for (let i=0; i<rectCount; i++){
        if(arr[i].z == 1){
            fill(0,255,0);
        }else{
            fill(255,0,0);
        }
        rect(arr[i].x -25, arr[i].y -25, 50, 50);

        if(arr[i].x < 25 || arr[i].x > width-25){
            arr[i].z *= -1;
        }
        arr[i].x += arr[i].z * speedMult;
    }

}



