var bubble1 =[];

function setup(){
    createCanvas(1000,1000);
    for(var i = 0; i < 100; i++){
    bubble[i] = {
        x: random(0, 1000),
        y: random(0, 1000),
        c: color(random(0,345), random(0,345), random(0,345)),
        xvel: 3,
        yvel: 3
    };
    }
}
function draw() {
    background(0)
    fill(200);
    ellipse(bubble1.x, bubble1.y, bubbleSize, bubbleSize);
    bubble1.x += bubble1.xvel
    bubble1.y += bubble1.xvel

    if (bubble1.x + bubbleSize/2 > width || bubble1.x - bubble/2 < 0) {
        bubble1.xvel = bubble1.xvel
    }
    if (bubble1.y + bubbleSize/2 > width || bubble1.y - bubble/2 < 0) {
        bubble1.yvel = bubble1.yvel
    }

}
