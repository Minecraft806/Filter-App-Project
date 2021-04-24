var NoseByX=0;
var NoseHelloY=0;


function preload() {
ClownyNoseBoy=loadImage("https://i.postimg.cc/KvYhgt81/download-2.jpg")
}

function setup() {
    canvas=createCanvas(250,200)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    video.size(250,200);
    postnet=ml5.poseNet(video,modelLoaded)
    postnet.on('pose',gotPosesYoYouHearinThis)
}

function gotPosesYoYouHearinThis(results) {
    if(results.length>0) {
        console.log(results)
        NoseByX=results[0].pose.nose.x-10;
        NoseHelloY=results[0].pose.nose.y-10;

        console.log("nosey x= "+NoseByX);
        console.log("nosey y= "+NoseHelloY);
    }
}

function modelLoaded() {
    console.log("Model Has Been Loaded... Repeat")
}

function draw() {
image(video,0,0,250,200);
image(ClownyNoseBoy,NoseByX,NoseHelloY+10,25,20)
}

function take_snap_01() {
    save("download.png")
}