let playlistBox = document.getElementById("playlist-box");
let artistBox = document.getElementById("artist-box");
let playlistBtn = document.getElementById("playlist");
let artistBtn = document.getElementById("artist");
let expandLibraryBtn = document.getElementById("expand-library");// expand library button
let songListBox = document.querySelector(".song-list-container");
let artist = document.querySelector(".artist");
let cover = document.getElementById("cover")
let video1 = cover.querySelector("video");
let img = cover.querySelector("img");
let gif = document.getElementById("gif");
let playBoxSong = document.getElementById("playBoxSong");
let playBoxArtist = document.getElementById("playBoxArtist");
let audioElement = new Audio();
let photo = document.querySelector(".song-details-smallbox").querySelector("img");
let sm  = document.querySelector(".SM-songs-list");
let NFsongListBox = document.querySelector(".NF-songs-list");
let box = document.getElementById("box");
let n = playlistBox.querySelector(".NF");
let s = playlistBox.querySelector(".N");

let N = [
    {name:"NAMASTUTE",path:"../songs/Seedhe Maut - Namastute.mp3",cover:"../songs/SHAKTI.mp4",artistName:"Seedhe Maut"},
    {name:"Naamcheen",path:"../songs/Seedhe Maut - Naamcheen.mp3",cover:"../songs/SHAKTI.mp4",artistName:"Seedhe Maut"},
    {name:"Gandi aulad",path:"../songs/GandiAulad.mp3",cover:"https://images.genius.com/67b32746962542c64470f0f441e75ab3.1000x1000x1.jpg",artistName:"Seedhe Maut"},
    {name:"Nanchaku",path:"../songs/Nanchaku.mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"Seedhe Maut"},
    {name:"Natkhat",path:"../songs/Natkhat.mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"Seedhe Maut"},
 ]
 let NF = [
     {name:"HAPPY",path:"../songs/NF - HAPPY (Lyrics).mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"NF"},
     {name:"Hope",path:"../songs/NF - HOPE.mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"NF"},
     {name:"The Search",path:"../songs/NF - The Search.mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"NF"},
     {name:"Time",path:"../songs/NF - Time.mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"NF"},
     {name:"Hate myself",path:"../songs/NF - Hate Myself (Audio).mp3",cover:"https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png",artistName:"NF"},
 ]

const BY_DEFAULT = NF[0];
audioElement.src = BY_DEFAULT.path;
 const home = ()=>{
    if(sm){
        sm.style.display = "none";
    }
    if(NFsongListBox){
        NFsongListBox.style.display = "none"
    }
    box.style.display = "flex"
 }
 document.querySelector("nav").addEventListener("click",()=>{
    home();
 })
 cover.addEventListener("click",()=>{
    home();
 })

 const createVideo = (source)=>{
    if(video1){
        cover.removeChild(video1)
    }
    let video = document.createElement("video");
    video.src = source;
    video.autoplay;
    video.loop = true;
    video.muted = true;
    cover.appendChild(video);
    video1 = video
 }
 const createImg = (source)=>{
    let img = document.createElement("img");
    img.src = source;
    cover.appendChild(img);
 }


let songName = document.querySelector("#songName")
let playlist = NF;

let playlistName = playlistBox.querySelectorAll(".P");
const func = (ele)=>{
    if(ele === 'N' || ele.classList[1]  === 'N'){
        playlist = N;
        if(img){
            cover.removeChild(img);
        }
        createVideo("../songs/SHAKTI.mp4")
        audioElement.src = "../songs/Seedhe Maut - Namastute.mp3"
        songName.innerText = playlist[0].name;
        artist.innerText = playlist[0].artistName;
        playBoxArtist.innerText = playlist[0].artistName;
        playBoxSong.innerText = playlist[0].name;
        photo.src = "https://i.scdn.co/image/ab67616d0000b273d65e2670b7176415b9d88a59";
        if(NFsongListBox){
            NFsongListBox.style.display = "none";
        }
        if(box){
            box.style.display = "none"
        }
        sm.style.display = "block"
        play();   
    }
    else if(ele === 'NF' || ele.classList[1]  === 'NF'){
        playlist = NF
        if(img){
            cover.removeChild(img);
        }
        createVideo("https://v1.pinimg.com/videos/mc/720p/a7/59/b8/a759b8e42dfe66eb26c53a73437e9397.mp4");
        audioElement.src = "../songs/NF - HAPPY (Lyrics).mp3"
        songName.innerText = playlist[0].name;
        artist.innerText = playlist[0].artistName;
        playBoxArtist.innerText = playlist[0].artistName;
        playBoxSong.innerText = playlist[0].name
        photo.src = "https://upload.wikimedia.org/wikipedia/en/8/84/NF_-_Hope.png"
        if(sm){
            sm.style.display = "none";
        }
        if(box){
            box.style.display = "none"
        }
        
        NFsongListBox.style.display = "block" 
        play();   
       }
}

playlistName.forEach(ele =>{
    ele.addEventListener("click",()=>{
        func(ele);
    })
})

function DisplayArtistBox(){
    playlistBox.style.display = "none";
    artistBox.style.transition  = "all 0.3s";
    artistBox.style.display = "block";
    artistBtn.style.backgroundColor = "#FFFFFF";
    artistBtn.querySelector("p").style.color = "#343a40";
}
function DisplayPlaylistBox(){
    playlistBox.style.transition  = "all 0.3s";
    artistBox.style.display = "none";
    playlistBox.style.display = "block";
    artistBtn.style.backgroundColor = "#343a40";
    artistBtn.querySelector("p").style.color = "#FFFFFF";  
}

cover.addEventListener("mouseenter",()=>{
    video1.style.filter = "brightness(100%)"
        
})
cover.addEventListener("mouseleave",()=>{
    video1.style.filter = "brightness(35%)"
})


let l = document.querySelectorAll("li");
let coverImg = document.getElementById("cover").querySelector("video")
l.forEach((ele) => {
    ele.addEventListener("click",()=>{
        audioElement.src = playlist[ele.value].path;
        songName.innerText = playlist[ele.value].name;
        artist.innerText = playlist[ele.value].artistName;
        playBoxArtist.innerText = playlist[ele.value].artistName;
        playBoxSong.innerText = playlist[ele.value].name;
        play();
    })
});

const playnext = ()=>{
    for(let i = 0;i<playlist.length;i++){
        if(audioElement.getAttribute('src') == playlist[i].path){
             i = i+1;
             if(i == playlist.length){
                audioElement.src = playlist[0].path
                songName.innerText = playlist[0].name
                artist.innerText = playlist[0].artistName; 
                playBoxArtist.innerText = playlist[0].artistName;
                playBoxSong.innerText = playlist[0].name

             } 
             else{
                audioElement.src = playlist[i].path
                songName.innerText = playlist[i].name
                artist.innerText = playlist[i].artistName;
                playBoxArtist.innerText = playlist[i].artistName;
                playBoxSong.innerText = playlist[i].name
             } 
             play();
             break;  
        }
    }
}
const playprev = ()=>{
    for(let i = 0;i<playlist.length;i++){
        if(audioElement.getAttribute('src') === playlist[i].path){
            i = i-1;
            if(i <= 0) {
                audioElement.src = playlist[playlist.length-1].path
                songName.innerText = playlist[playlist.length-1].name
                artist.innerText = playlist[playlist.length-1].artistName;
                playBoxArtist.innerText = playlist[playlist.length -1].artistName;
                playBoxSong.innerText = playlist[playlist.length -1].name
            }
            else {
                audioElement.src = playlist[i].path
                songName.innerText = playlist[i].name
                artist.innerText = playlist[i].artistName;
                playBoxArtist.innerText = playlist[i].artistName;
                playBoxSong.innerText = playlist[i].name
             }
            play();
            break;  
        }
    }
}



//playing music
// first we create audio then put it in the playing.btns
let player = document.querySelector(".playing-btns");
let playBtn = document.querySelector(".play");
let startTime = document.querySelector("#starting-time");
let endTime = document.querySelector("#end-time");
let playerBox = document.querySelector("#player");
let range = playerBox.querySelector("input");

let time;
let interval;



// Getting duration of the song
audioElement.addEventListener("loadedmetadata",()=>{
    time = Math.floor(audioElement.duration)
    range.max = time
    endmin = Math.floor(time/60)
    endsec = time % 60
    endTime.innerText = `${endmin}:${endsec.toString().padStart(2,"0")}`
     
})
// formatting time for the span tag
const formatTime = (time)=>{
    let min = Math.floor(time / 60);  // this gives me minute of the current time
    let sec = Math.floor(time % 60); // this gives remaining seconds of the current time
    return `${min}:${sec.toString().padStart(2,'0')}`; // this put it in the span 
}
// Update the time sync with the current time
const updateTime = ()=>{
    let current = Math.floor(audioElement.currentTime)//gets the current timing of the song
    startTime.innerText = formatTime(current)//formated 
    range.value = current // make the range sync with the audio
}
audioElement.addEventListener("ended",()=>{
        clearInterval(interval);//stop from playing
        audioElement.currentTime = 0;// make current time 0
        range.value = 0;// seek bar should also get back to its place
        startTime.innerText =`0:00`// span tag also be in placed 
        playnext();
})

//Continously calling function 
const playing =()=>{
    updateTime();// update time
}
// how to play on click of button this func call
const play = ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){// if audio is paused or not playing 
        audioElement.play();// make it play
        interval = setInterval(() => {
        playing();
        }, 1000);//continous updating time or playing
        playBtn.querySelector("i").classList.remove("fa-play");
        playBtn.querySelector("i").classList.add("fa-pause");
        gif.style.display = "block";
        if(video1){
            video1.play();
        }
        
    }
    else{
        audioElement.pause();// pause
        clearInterval(interval);// stop playing
        playBtn.querySelector("i").classList.remove("fa-pause");
        playBtn.querySelector("i").classList.add("fa-play");
        gif.style.display = "none";
        if(video1){
            video1.pause();
        }
        
    }
}
// make the audio play as user want 
const change = ()=>{
    audioElement.currentTime = range.value; // current time got the value of range and starts playing from there
    updateTime();// this updates the time accordingly 
}
// styling input and search icon
let nav = document.querySelector("nav");
let input = nav.querySelector("input");
let Search = nav.querySelector(".fa-magnifying-glass")
input.addEventListener("mouseenter",()=>{
    input.style.transition = "all 0.2s";
    input.style.backgroundColor = "#343a40";
    input.style.color = "whitesmoke";
    Search.style.color = "whitesmoke";
    Search.style.transition = "all 0.2s";   
    Search.style.backgroundColor = "#343a40";
})
input.addEventListener("mouseleave",()=>{
    input.style.transition = "all 0.2s";
    input.style.backgroundColor = "#1d2227";
    input.style.color = "#adb5bd";
    Search.style.color = "#adb5bd";
    Search.style.transition = "all 0.2s";   
    Search.style.backgroundColor = "#1d2227";
    input.style.border = "none";
    Search.style.border = "none";
})
input.addEventListener("click",()=>{
    input.style.transition = "all 0.1s";
    Search.style.transition = "all 0.1s";  
    input.style.border = "2px solid whitesmoke";
    input.style.borderLeft = "none";
    Search.style.border = "2px solid whitesmoke";
    Search.style.borderRight = "none";
   
})
// styling install app button 
let installapp = document.getElementById("appInstall");
let InstallIcon = installapp.querySelector(".fa-circle-down");
let InstallText = installapp.querySelector("p");
installapp.addEventListener("mouseenter",()=>{
    InstallIcon.style.transition = "transform 0.1s";
    InstallText.style.transition = "transform 0.1s";
    installapp.style.transition = "all 0.1s";
    installapp.style.transform = "scale(1.05)";
    InstallIcon.style.color = "#FFFFFF";
    InstallText.style.color = "#FFFFFF";
})
installapp.addEventListener("mouseleave",()=>{
    InstallIcon.style.transition = "transform 0.1s";
    InstallText.style.transition = "transform 0.1s";
     installapp.style.transition = "all 0.1s";
    installapp.style.transform = "scale(1)";
    InstallIcon.style.color = "#adb5bd";
    InstallText.style.color = "#adb5bd";
})