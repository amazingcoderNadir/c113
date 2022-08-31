function preload() {
} 

function setup() {
    canvas =  createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 640,480);
    fill("red");
    stroke("red");
    circle(20, 20, 75 );
    circle(600, 20, 75 );
    circle(20, 450, 75 );
    circle(600, 450, 75 );
}