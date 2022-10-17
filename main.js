function preload(){
mp3=loadSound("music.mp3");

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

song="";
function play(){
   mp3.play(); 
}