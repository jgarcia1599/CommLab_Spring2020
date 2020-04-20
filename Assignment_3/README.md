## Farm Remixer
By Junior and Majo

<a href=”http://jfg388.nyuadim.com/Assignment_3/index.html”>Link to Project</a>

# Project Description

For this audio project, me and my partner Majo  decided to do something playful and fun. Given that both of us didn't have a lot of sound editing experience, we were trying to come up with a project that will require minimum editing work while also being good enough to be engaging. We created a “Make your own” remixing experience that allows users to remix their own songs by overlaying animal sounds performed by humans (by Majo and her friend). We were inspired by fun youtube meme videos that show songs being remixed with animal sounds, so we tried to mimic this experience by empowering users to create their animal remixes.   


# Process and Implementation

We wanted users to have as much control on the remixing experience as possible. In order to do so, we leveraged <a href=”https://developers.soundcloud.com/docs/api/html5-widget#api”> Soundcloud’s widget API</a> to allow users to choose a song from a playlist curated by Majo in a pop up widget that appears as soon as the page loads. After users choose a song in the widget, they then need to click on the Do Remix button which takes them to the<a href=”https://p5js.org/”>p5.js</a>  canvas where there are a bunch of animals in a farm. In the “Remix” mode, the user can click on whatever animals they want and the animal sounds will be played. After some time having fun remixing, the user can click on the “Play Remix” button to listen to their masterpiece. The user can then start the process again by clicking on the Soundcloud icon to choose another song and do another remix by repeating the same steps described above. Majo was in charge with the animal sound editing and curation, playlist curation, and images while I was in charge of coding the website. 

From my end, the first hurdle I needed to overcome was to resolve the conflicts that existed between showing the p5.js canvas and the Soundcloud widget in the HTML DOM. To do so, it required a bit of CSS and javascript handling that I got from my friend Steven Wyks.  I placed the background and animal pictures on the canvas using p5.js functions. To capture if the mouse click lies on top of the animal, I used p5.js’ native mouseClicked function where  l play the animal sound using p5.js’ loadSound() and .play() functions. The most complex thing was for sure recreating the remix. To do so, I created two arrays, one that contains the sounds played and one that contains the timestamps they were played in, and one timer variable that increases at every frameRate in the p5 draw function. The timer starts at the beginning of the remix mode and the clicks on the animal images saves the sound in the sound array and the time stamps in the time array. After the remix button is played, the timer variable is restarted, the Soundclound song is restarted, and at every frame rate, a for loop that goes through all the sounds in the sound array function checks if the corresponding timestamp element in the timestamp array equals to the timer variable. If it is, then the animal sound is played. The variables (times stamp array, sound array, and timer) are emptied whenever the users click on the Soundcloud widget again in order to start the process again.  



# Reflection and Evaluation

This was my favorite project as it was both really playful and really interesting to code. I like working with different API and libraries and see if there exists any possible collaborations within them. I also like working on playful things that make users smile. 


