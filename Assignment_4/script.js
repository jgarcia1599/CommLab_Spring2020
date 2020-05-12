let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let r = 25;
let mycircle;
let circles =[];
let heartImg;

var heart_type = "heart";

console.log("hi");
function preload(){
  heartImg = loadImage("img/heart.webp");
  brokenImg = loadImage("img/sad.png");

}
function setup() {
  background(255, 219, 250);
  createCanvas(windowWidth,windowHeight);
  for (var i = 0;i<20;i++){
    //even, then positive orientation 
    if (i % 2 ==0){
      circles.push(new Circle(x+i*20,y+i*20,r,xspeed,yspeed,(Math.PI/i),[255,0,0]))
      
    }
    else{
      //odd, then negative orieentation
      circles.push(new Circle(x+i*20,y+i*20,r,xspeed,yspeed,-(Math.PI/i),[255,0,0]));
      
    }
  }
}

function draw(){
  background(255, 219, 250);
  // console.log("gay");
  for (var i = 1;i<circles.length;i++){
    circles[i].display()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Circle{
  constructor(xCircle,yCircle,radius,xSpeed,ySpeed,orientation,color){
    this.x = xCircle;
    this.y = yCircle;
    this.r = radius;
    this.xSpeed=xSpeed;
    this.ySpeed = ySpeed;
    this.orientation = orientation;
    this.color = color;
    this.state = 'heart';
  }
  drawCircle(){
    if (heart_type == "heart"){
      image(heartImg,this.x, this.y, this.r*2, this.r*2);
    }
    else{
      //broken heart sending
      image(brokenImg,this.x, this.y, this.r*2, this.r*2);
      

    }

  }
  display(){
    this.x += this.orientation * this.xSpeed;
    this.y +=this.orientation * this.ySpeed;
    if (this.x > width - this.r || this.x < this.r){
      this.xSpeed=-this.xSpeed;
      
    }
    if(this.y > height - this.r || this.y < this.r){
      this.ySpeed = -this.ySpeed;
      
    }
    this.drawCircle();
  }  
}


//Youtube Stuff
var beginning_video = "y1d0fFTjasM";
var ending1 = "nTpkFyjQ32c";//happy ending
var ending2 = "Hl-CJt__liE";//sad ending

var player;
onYouTubePlayerAPIReady()
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: beginning_video,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
}

// autoplay video
function onPlayerReady(event) {
    event.target.playVideo();
}

// when video ends
function onPlayerStateChange(event) {        
    if(event.data === 0) {            
        // alert('done');
        document.getElementById('player').remove();
        $( "chooseendings" ).show( "slow" );
        document.getElementById("chooseendings").style.display="block";
        document.getElementById("beginningtext").style.display="none";

    }
}
function showending1(){
  console.log("show ending 1");
  document.getElementById("chooseendings").style.display="none";
  document.getElementById('reload').style.display = "block";
  // document.getElementById('goback').style.display = "block";
  player = new YT.Player('ending', {
    height: '390',
    width: '640',
    videoId: ending1,
    events: {
      'onReady': onPlayerReady
    }
  });


}
function showending2(){
  heart_type = "broken";
  console.log("show ending 2");
  document.getElementById("chooseendings").style.display="none";
  document.getElementById('reload').style.display = "block";
  // document.getElementById('goback').style.display = "block";
  player = new YT.Player('ending', {
    height: '390',
    width: '640',
    videoId: ending2,
    events: {
      'onReady': onPlayerReady
    }
  });
}

function reload(){
  console.log("reload");
  window.location.reload(true);
}


