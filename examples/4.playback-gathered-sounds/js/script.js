var sounds = [];
var times = [];
var gather = true;

const longplayer = document.createElement("audio");
longplayer.src="audio/0.wav";
longplayer.addEventListener("playing", function(){
  gather = true;
});

const playerEH = document.createElement("audio");
playerEH.src = "audio/enemy1.wav";
const playerUH = document.createElement("audio");
playerUH.src = "audio/enemy2.wav";
const playerEr = document.createElement("audio");
playerEr.src = "audio/enemy3.wav";
const playerGr = document.createElement("audio");
playerGr.src = "audio/enemy_growl.wav";

btnlongplay = document.getElementById("longplay");
btnEH = document.getElementById("EH");
btnUH = document.getElementById("UH");
btnEr = document.getElementById("Er");
btnGr = document.getElementById("growl");
btnplayarray = document.getElementById("playarray");

btnEH.addEventListener("click", function(){
  playerEH.play();
  if (gather) {
    sounds.push(playerEH);
    times.push(longplayer.currentTime);
    console.log(sounds);
    console.log(times);
  }
});
btnUH.addEventListener("click", function(){
  playerUH.play();
  if (gather) {
    sounds.push(playerUH);
    times.push(longplayer.currentTime);
    console.log(sounds);
    console.log(times);
  }
});
btnEr.addEventListener("click", function(){
  playerEr.play();
  if (gather) {
    sounds.push(playerEr);
    times.push(longplayer.currentTime);
    console.log(sounds);
    console.log(times);
  }
});
btnGr.addEventListener("click", function(){
  playerGr.play();
  if (gather) {
    sounds.push(playerGr);
    times.push(longplayer.currentTime);
    console.log(sounds);
    console.log(times);
  }
});

btnlongplay.addEventListener("click", function(){
  if (longplayer.paused) {
      longplayer.play();
      //btn.className = "active";
    } else {
      longplayer.pause();
      longplayer.currentTime = 0;
      //btn.className = "";
      //clear the arrays
    }
  
});

btnplayarray.addEventListener("click", function(){
  longplayer.play();
  longplayer.addEventListener("timeupdate", playSequence);
});

var counter = 0

function playSequence() {
  gather = false;
  //check if array is not empty
  if (counter < sounds.length){
    if (longplayer.currentTime >= times[counter]){
        sounds[counter].play();
        counter++;
        console.log(counter);
    }  
  }

  
}





