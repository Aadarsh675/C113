function preload() {
    
}
function setup() {
    //createCanvas(width, height)
    canvas = createCanvas(500, 500);
    //canvas.position(x, y)
    canvas.position(150, 300);
    //set up the live webcam view
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    tint_color = "";
}
function draw() {
    //image(variable, x-position, y-position, width, height)
    image(video, 0, 0, 500, 500);
    //how to apply tint effect
    tint(tint_color);
    //fill("red");
    //stroke("red");
    //circle(450, 50, 50);
    //rect(0, 450, 500, 50);
}
function apply_filter() {
    tint_color = document.getElementById("color_input").value;
}
function take_snapshot() {
    save("capture.png")
}