var canvas;
let revealerCount = 0;

let horse,horse_x,horse_y,horse_width,horse_height,horse_sound;
let sheep,sheep_x,sheep_y,sheep_width,sheep_height,sheep_sound;
let pig,pig_x,pig_y,pig_width,pig_height,pig_sound;
let goat,goat_x,goat_y,goat_width,goat_height,goat_sound;
let duck,duck_x,duck_y,duck_width,duck_height,duck_sound;
let dolphin,dolphin_x,dolphin_y,dolphin_width,dolphin_height,dolphin_sound;
let dog,dog_x,dog_y,dog_width,dog_height,dog_sound;
let cow,cow_x,cow_y,cow_width,cow_height,cow_sound;
let bird,bird_x,bird_y,bird_width,bird_height,bird_sound;
let cat,cat_x,cat_y,cat_width,cat_height,cat_sound;

let aimg_width,aimg_height;


let button;



var sounds_played = [];
var times = [];
var timecount = 0;
var doRemixing = false;
let songRemixedcounter = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//for soundsand images
function preload(){
    horse = loadImage("media/img/horse.svg");
    sheep = loadImage("media/img/sheep.svg");
    pig = loadImage("media/img/pig.svg");
    goat = loadImage("media/img/goat.svg");
    duck = loadImage("media/img/duck.svg");
    dolphin = loadImage("media/img/dolphin.svg");
    dog = loadImage("media/img/dog.svg");
    cow = loadImage("media/img/cow.svg");
    bird = loadImage("media/img/bird.svg");
    cat = loadImage("media/img/cat.svg");
  
    horse_sound = loadSound("media/audio/horse.mp3");
    sheep_sound = loadSound("media/audio/goat.mp3");
    pig_sound = loadSound("media/audio/pig.mp3");
    goat_sound = loadSound("media/audio/goat.mp3");
    duck_sound = loadSound("media/audio/duck.mp3");
    dolphin_sound = loadSound("media/audio/dolphin.mp3");
    dog_sound = loadSound("media/audio/dog.mp3");
    cow_sound = loadSound("media/audio/cow.mp3");
    bird_sound = loadSound("media/audio/bird.mp3");
    cat_sound = loadSound("media/audio/cat.mp3"); 
}


function setup() {
  frameRate(10)
  bg = loadImage("https://cdn.glitch.com/7d6e1ee6-4343-47f0-aca4-609e853ffcdb%2Ffarm.jpg?v=1586716285560")
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  aimg_width = windowWidth*0.06;
  aimg_height = windowHeight*0.1;
  
}
function draw() {
  timecount+=1;
  // console.log("Time: "+timecount);
  
  // console.log(timecount)
  
  
  
  windowResized();
  background(bg);

  //Draw horse
  horse_x = windowWidth/2;
  horse_y = windowHeight/2;
  image(horse,windowWidth/2,windowHeight/2,aimg_width,aimg_height);

  //Draw sheep
  sheep_x = (windowWidth/2) + windowWidth*0.3;
  sheep_y = (windowHeight/2) + 10;
  image(sheep,sheep_x,sheep_y,aimg_width,aimg_height);
  
  //Draw pig
  pig_x = (windowWidth/2) - windowWidth*0.3;
  pig_y = (windowHeight/2) + 10;
  image(pig,pig_x,pig_y,aimg_width,aimg_height);
  
  
  //Draw goat
  goat_x = (windowWidth/2) - windowWidth*0.3;
  goat_y = (windowHeight/2) + windowHeight*.2;
  image(goat,goat_x,goat_y,aimg_width,aimg_height);
  
  //Draw duck
  duck_x = (windowWidth/2) - windowWidth*0.5;
  duck_y = (windowHeight/2) + windowHeight*.2;
  image(duck,duck_x,duck_y,aimg_width,aimg_height);
  
  //Draw dolphin
  dolphin_x = (windowWidth/2) + windowWidth*0.3;
  dolphin_y = (windowHeight/2) + windowHeight*.2;
  image(dolphin,dolphin_x,dolphin_y,aimg_width,aimg_height);
  
  //Draw dog
  dog_x = (windowWidth/2) + windowWidth*0.3 - windowWidth*0.09;
  dog_y = (windowHeight/2) + windowHeight*.2;
  image(dog,dog_x,dog_y,aimg_width,aimg_height);
  
  //Draw cat
  cat_x = (windowWidth/2);
  cat_y = (windowHeight/2) + windowHeight*.2;
  image(cat,cat_x,cat_y,aimg_width,aimg_height);
  
  //Draw dog
  cow_x = (windowWidth/2)+ windowWidth*.1;
  cow_y = (windowHeight/2) + windowHeight*.3;
  image(cow,cow_x,cow_y,aimg_width,aimg_height);
  
  //Draw bird
  bird_x = (windowWidth/2) - windowWidth*.2;
  bird_y = (windowHeight/2) + windowHeight*.3;
  image(bird,bird_x,bird_y,aimg_width,aimg_height);
  
  if (doRemixing){
      for (var i = 0;i<sounds_played.length;i++){
        // console.log("inside for loop")
        // console.log(sounds_played[i]);
        // console.log(times[i]);
        if (timecount == times[i]){
          console.log("okay please work play sound if not ill be so saaaad");
          sounds_played[i].play();
        }
  }
    
  }

  
  
}

function mouseClicked(){
  console.log('confirmation that the mouse got clicked!');
  console.log(mouseX, mouseY); //where is the mouse anyway?
  // console.log(sounds_played);
  // console.log(times);
  
  if ((mouseX<=(horse_x+aimg_width)&& mouseX>=horse_x) && (mouseY<=(horse_y+aimg_height)&&mouseY>=horse_y)){
    console.log("Inside horse");
    horse_sound.play();
    sounds_played.push(horse_sound);
    times.push(timecount);
  }
  
  
  if ((mouseX<=(pig_x+aimg_width)&& mouseX>=pig_x) && (mouseY<=(pig_y+aimg_height)&&mouseY>=pig_y)){
    console.log("Inside pig");
    pig_sound.play();
    sounds_played.push(pig_sound);
    times.push(timecount);
  }
  
  
  if ((mouseX<=(dolphin_x+aimg_width)&& mouseX>=dolphin_x) && (mouseY<=(dolphin_y+aimg_height)&&mouseY>=dolphin_y)){
    console.log("Inside dolphin")
    dolphin_sound.play()
    sounds_played.push(dolphin_sound);
    times.push(timecount);
  }
 
  
  if ((mouseX<=(goat_x+aimg_width)&& mouseX>=goat_x) && (mouseY<=(goat_y+aimg_height)&&mouseY>=goat_y)){
    console.log("Inside goat");
    goat_sound.play();
    sounds_played.push(goat_sound);
    times.push(timecount);
  }
  
  if ((mouseX<=(duck_x+aimg_width)&& mouseX>=duck_x) && (mouseY<=(duck_y+aimg_height)&&mouseY>=duck_y)){
    console.log("Inside duck");
    duck_sound.play();
    sounds_played.push(duck_sound);
    times.push(timecount);
  }
  
  if ((mouseX<=(dog_x+aimg_width)&& mouseX>=dog_x) && (mouseY<=(dog_y+aimg_height)&&mouseY>=dog_y)){
    console.log("Inside dog");
    dog_sound.play();
    sounds_played.push(dog_sound);
    times.push(timecount);
  }

  if ((mouseX<=(cow_x+aimg_width)&& mouseX>=cow_x) && (mouseY<=(cow_y+aimg_height)&&mouseY>=cow_y)){
    console.log("Inside cow");
    cow_sound.play();
    sounds_played.push(cow_sound);
    times.push(timecount);
  }
  
  if ((mouseX<=(bird_x+aimg_width)&& mouseX>=bird_x) && (mouseY<=(bird_y+aimg_height)&&mouseY>=bird_y)){
    console.log("Inside bird");
    bird_sound.play();
    sounds_played.push(bird_sound);
    times.push(timecount);
    
  }
  
  if ((mouseX<=(cat_x+aimg_width)&& mouseX>=cat_x) && (mouseY<=(cat_y+aimg_height)&&mouseY>=cat_y)){
    console.log("Inside cat");
    cat_sound.play()
  }
  
   if ((mouseX<=(sheep_x+aimg_width)&& mouseX>=sheep_x) && (mouseY<=(sheep_y+aimg_height)&&mouseY>=sheep_y)){
    console.log("Inside sheep");
    sheep_sound.play();
    sounds_played.push(sheep_sound);
    times.push(timecount);
  } 

}





//Souncloud Stuff

function revealSoundcloud() {
    revealerCount += 1;
    console.log(revealerCount);
    var widgetIframe = document.getElementById('sc-widget');
    console.log(widgetIframe)
    var p5canvas = document.getElementById('defaultCanvas0');
    var soundLogo = document.getElementById('soundcloudLogo');
    var bottomTime = document.getElementsByClassName('bottomTime');
    var removeRemix = document.getElementById("removeRemix");
    var remixbutton = document.getElementById("remixButton");
    if (revealerCount % 2 == 0) {
        //I will disable this posible for my project
        soundLogo.style.display = "none";
        widgetIframe.style.display = "inline";
        p5canvas.style.opacity = "0.4";
        console.log("Display Souncloud Playlist Again");
        removeRemix.style.display = "inline";
        console.log(sounds_played);
        console.log(times);
        console.log(timecount);
        sounds_played = [];
        times = [];

    }
    else if (revealerCount % 2 == 1) {
        widgetIframe.style.display = "none";
        p5canvas.style.opacity = "1";
        soundLogo.style.display = "inline";
        removeRemix.style.display = "none";
        timecount = 0;
        $('#remixButton').css('pointer-events', 'all');
        console.log();
      
        
    }
}
function doRemix(){
  console.log("Do remix!");
  var widgetIframe = document.getElementById('sc-widget');
  var widget = SC.Widget(widgetIframe);
  widget.getCurrentSound(function (currentSound) {
  console.log('Song named '+currentSound.title+'began to play');
  console.log(currentSound);
  });
  widget.seekTo(0);
  widget.setVolume(60);
  doRemixing = true;
  console.log(sounds_played[0].play);
  timecount = 0;
}



