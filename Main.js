noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600,150),
    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialized');
} 
function gotPoses(results){
  if(results.length > 0){
      console.log(results);
      
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.y;
      difference = floor(leftWristX - rightWristX);
  }
}function draw(){
    background('#6C91C2')
    textSize(difference);
    fill('#FFE787');
    text('Afhaam', 50, 400);
}