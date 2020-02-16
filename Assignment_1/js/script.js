var sad = "media/sad.jpeg";
var look = "media/side.png";
var open = "media/open.png";
var close = "media/closed.png";
var happy = "media/happy.jpg"
var img_srcs = [
    "media/d2.png",
    "media/starbucks.png",
    "media/mealclub.png",
    "media/vegetarian.png",
    "media/homebaked.png",
    "media/thegrill.png",
    "media/saj.png",
    "media/feelgood.png",
    "media/hotwok.png",
    "media/breakfast.png",
    "media/saladbar.png",
    "media/vegan.png",
    "media/deserts.png",
    "media/grabandgo.png",
    "media/soups.png",
    "media/30mff.png"
]

var obj = document.createElement("audio");
obj.src = "media/pacman2.wav";
obj.volume = 0.4;
obj.autoPlay = false;
obj.preLoad = true;
obj.controls = true;

var yay = document.createElement("audio");
yay.src = "media/yay.wav";
yay.volume = 0.7;
yay.autoPlay = false;
yay.preLoad = true;
yay.controls = true;

$(document).ready(function(){


    $(".headerimg").click(function(){
        console.log("D2 IMG CLICKED");
        var id = $(this).attr('id');
        console.log(id);
        var idnum= id.replace("img",'');
        console.log(idnum)
        $('html,body').animate({
            scrollTop: $('#'+idnum).offset().top},
            'slow');
            

    })
    $('header').click(function(){
        $('html,body').animate({
            scrollTop: $('main').offset().top},
            'slow'); 
    })
    $('#uparrow').click(function(){
        $('html,body').animate({
            scrollTop: $('header').offset().top},
            'slow'); 
    })
    animate();
})
var requestAnimationFrame = window.requestAnimationFrame       ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame    ||
                            window.msRequestAnimationFrame; 
var time = 0;
var fps = 2; //frames per second to determine how many frames I want per second   

const animate = () => {
    //use set timeout function to slowdown animation frame.
    setTimeout(function(){
        requestAnimationFrame(animate)
        draw()
    },1000 / fps)
    
  }
const draw = () => {
    time++;
    if (time == 1){
        console.log(time);
        change_image(0,sad); 
    }
    else if (time == 2){
        console.log(time);
        change_image(0,look); 

    }
    else if (time == 3){
        console.log(time); 
        change_image(0,img_srcs[0]); 
        change_image(4,open);
        obj.play();
    }
    else if (time == 4){
        console.log(time);
        change_image(4,img_srcs[1]);
        change_image(8,close);
    }
    else if (time == 5){
        console.log(time);
        change_image(8,img_srcs[2]);
        change_image(12,open);
        obj.play(); 
    }
    else if (time == 6){
        console.log(time); 
        change_image(12,img_srcs[3]);
        change_image(1,close);  
    }
    else if (time == 7){
        console.log(time);
        change_image(1,img_srcs[4]);
        change_image(5,open);  
        obj.play();   
    }
    else if (time == 8){
        console.log(time); 
        change_image(5,img_srcs[5]);
        change_image(9,close);
    }
    else if (time == 9){
        console.log(time);
        change_image(9,img_srcs[6]);
        change_image(13,open); 
        obj.play();
    }
    else if (time == 10){
        console.log(time);
        change_image(13,img_srcs[7]);
        change_image(2,close)   
    }
    else if (time == 11){
        console.log(time);
        //jdjdjkdjd
        change_image(2,img_srcs[8]);
        change_image(6,open) 
        obj.play();  
    }
    else if (time == 12){
        console.log(time);
        change_image(6,img_srcs[9]);
        change_image(10,close)   
    }
    else if (time == 13){
        console.log(time);
        change_image(10,img_srcs[10]);
        change_image(14,open);
        obj.play();   
    }
    else if (time == 14){
        console.log(time);
        change_image(14,img_srcs[11]);  
        change_image(3,close);  
    }
    else if (time == 15){
        console.log(time);
        //jdjdjkdjd
        change_image(3,img_srcs[12]);
        change_image(7,open);
        obj.play();   
    }
    else if (time == 16){
        console.log(time);
        change_image(7,img_srcs[13]);
        change_image(11,close)   
    }
    else if (time == 17){
        console.log(time);
        change_image(11,img_srcs[14]);
        change_image(15,happy);
        yay.play();    
    }
    else if (time == 23){
        console.log(time);
        change_image(15,img_srcs[15])
    }
    else if (time == 45){
        //End delay
        console.log(time)
        time=0
    }
}

function change_image(i,src) {
    
    var images = $(".headerimg");
    $(images[i]).attr("src",src);
  }


