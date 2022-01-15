noseX = 0;
noseY = 0;

function preload() {
    cat_nose = loadImage('https://i.postimg.cc/V65nYxnS/clowwn-noseee.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 320);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(cat_nose, noseX, noseY, 80, 80);
}

function take_snapshot(){
    save('MyCatNose.png');
}

function modelLoaded() {
    console.log('modelLoaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10
    }
}