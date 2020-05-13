
var hasvisted ="false";
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let r = 25;
let mycircle;
let myletters =[];
let heartImg;
let fontsize=32;
let myportfolioname = ['J','U','N','I','0','R','F','R','A','N','C','I','S','C','O','G','A','R','C','I','A'];
let cv;
let initialposx;
let initialposy;

var displaycounter = 0;
var showname = 100;

var showmyname = 0;

console.log("hi");
function setup() {
	createCanvas(windowWidth, windowHeight);
  for (var i = 0;i<myportfolioname.length;i++){
    //even, then positive orientation 
    if (i % 2 ==0){
      myletters.push(new Letter(x+i*20,y+i*20,r,xspeed,yspeed,(Math.PI/i),[255,0,0],myportfolioname[i]));
      
    }
    else{
      myletters.push(new Letter(x+i*20,y+i*20,r,xspeed,yspeed,-(Math.PI/i),[255,0,0],myportfolioname[i]));
      
    }

  }

  
  
  
  
  
  
  
}
function draw(){
  background(255);
  console.log(hasvisted);
  if (hasvisted !="true"){
      // console.log(mouseX);
  // console.log(mouseY);
  // mycircle.update()
  if(showmyname ==1){
    displaycounter+=1;
    // console.log(displaycounter);
  }
   for (var i = 0;i<myletters.length;i++){
     if (showmyname == 1){
       myletters[i].fly="disappear";
     }
     myletters[i].display();
     
     
   }
   if (displaycounter == showname){
     revealname()

   }

  }


  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Letter{
  constructor(x,y,radius,xSpeed,ySpeed,orientation,color,letter){
    this.x = x;
    this.y = y;
    this.r = radius;
    this.xSpeed=xSpeed;
    this.ySpeed = ySpeed;
    this.orientation = orientation;
    this.color = color;
    this.letter = letter;
    this.truex = 0;
    this.truey = 0;
    this.fly = "fly";
  }
  drawLetter(){
    textSize(fontsize);
    text(this.letter,this.x, this.y, this.r*2, this.r*2);
    // fill(this.color[0],this.color[1],this.color[2]);
  }
  drawTrue(){
    textSize(fontsize);
    text(this.letter,this.truex, this.truey, this.r*2, this.r*2);
    
  }
  display(){
    if (this.fly=="fly"){
      this.x += this.orientation * this.xSpeed;
      this.y +=this.orientation * this.ySpeed;
      if (this.x > width - this.r || this.x < this.r){
        this.xSpeed=-this.xSpeed;
        
      }
      if(this.y > height - this.r || this.y < this.r){
        this.ySpeed = -this.ySpeed;
        
      }
      this.drawLetter();
    }
    else{
      this.xSpeed = 50;
      this.ySpeed = 50;
      this.x += this.orientation * this.xSpeed;
      this.y +=this.orientation * this.ySpeed;
      this.drawLetter();

    }
  }  
}


function displayname(){
  console.log("display name");
  showmyname = 1;
  $('#clickp').fadeOut("slow");
  console.log(hasvisted);
}

function revealname(){
  console.log("ok lets reveal my name");
  $('#pagetitle').show("slow");
  //set cookie so that animation doesnt display to the user more than once
 // expires almost every 15 minutes
  Cookies.set("visited","true",{expires:0.01});
}



//getcookievalue
hasvisted = Cookies.get('visited');

if (hasvisted =="true"){
  $('#pagetitle').css("display","block");
  $('#clickp').css("display","none");



}


//Popup stuff

$('#popup1').popup();
