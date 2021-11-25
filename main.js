function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(168, 10, 10);
    
    square(12,12,50);
    square(440,12,50);
    square(12,340,50);
    square(440,340,50);


    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot(){
    save("frame.png");
}