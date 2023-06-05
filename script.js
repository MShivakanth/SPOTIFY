console.log("Welcome to Spotify");

// Innitial tha Variable
let songIndex= 0;
let audioElement = new  Audio("songs/0.mp3");
let masterPlay = document.getElementById('masterPlay');
let cover = document.getElementById("cover");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let soundwave = document.getElementsByClassName("sw");


let songs = [
    {songName: "Pranaamam", filePath: "songs/0.mp3", coverPath: "img/1.jpeg", soundwave: "img/sound.gif", moviename:"Janatha Garage"},
    {songName: "Vikram-title", filePath: "songs/1.mp3", coverPath: "img/2.jpg",  soundwave: "img/sound.gif", moviename:"Vikram"},
    {songName: "Konda Kaki", filePath: "songs/2.mp3", coverPath: "img/3.jpeg",  soundwave: "img/sound.gif", moviename:"Aaparachithudu"},
    {songName: "Dhivara", filePath: "songs/3.mp3", coverPath: "img/4.jpg",  soundwave: "img/sound.gif", moviename:"Bahubali 1"},
    {songName: "Arerere Ekkada", filePath: "songs/4.mp3", coverPath: "img/5.jpg",  soundwave: "img/sound.gif", moviename:"Nenu Local"},
    {songName: "Aarambhame Le", filePath: "songs/5.mp3", coverPath: "img/6.jpg",  soundwave: "img/sound.gif", moviename:"Jersey"},
    {songName: "Amma Amma", filePath: "songs/6.mp3", coverPath: "img/7.jpg",  soundwave: "img/sound.gif", moviename:"Raghuvaran Btech"},
    {songName: "Lukkanna Mate", filePath: "songs/7.mp3", coverPath: "img/7.jpg",  soundwave: "img/sound.gif",  moviename:"Raghuvaran Btech"},
    {songName: "Naatu Naatu", filePath: "songs/8.mp3", coverPath: "img/8.jpeg",  soundwave: "img/sound.gif", moviename:"RRR"},
    {songName: "Kalavaathi", filePath: "songs/9.mp3", coverPath: "img/9.jpeg",  soundwave: "img/sound.gif", moviename:"Sarkari Vari Patta"},
    {songName: "Hrudayam Ekkadunaa", filePath: "songs/10.mp3", coverPath: "img/10.jpeg",  soundwave: "img/sound.gif", moviename:"Gajini"}
]   


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});


// Handle play/pause click at Bottom

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause');
    cover.style.opacity = 1;
    
    
   }else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play-circle');
    cover.style.opacity = 0;
   }
})


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");



    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songitemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songitemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause");
        audioElement.src = "songs/"+[songIndex]+".mp3";
        audioElement.currentTime = 0;
        document.querySelector("p").innerHTML = songs[songIndex].songName;
        document.querySelector("h4").innerHTML = songs[songIndex].moviename;
        cover.style.opacity = 1;
        audioElement.play();
        
    }else{
        audioElement.pause();
        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play-circle");
        cover.style.opacity = 0;

    }     
            
    })
})

document.getElementById("next").addEventListener('click', ()=>{
    document.querySelector("p").innerHTML = songs[songIndex+1].songName;
    document.querySelector("h4").innerHTML = songs[songIndex+1].moviename;
    if(songIndex>=10){
        songIndex=0;
        
    }else{
        songIndex+=1;
    }
    audioElement.src = "songs/"+[songIndex]+".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause");
        
        
})

document.getElementById("previous").addEventListener('click', ()=>{
    document.querySelector("p").innerHTML = songs[songIndex-1].songName;
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = "songs/"+[songIndex]+".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause");
        
})
