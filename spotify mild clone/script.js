let currsong=new Audio();

let currentSongIndex=0;
let lastVolume=1;

let songs;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
async function getMusic(){
    let ms= await fetch("http://127.0.0.1:5500/Music/")
    let res=await ms.text();
    console.log(res);
let div=document.createElement("div");
div.innerHTML=res;
let as=div.getElementsByTagName("a");
 songs=[];
for(let i=0;i<as.length;i++){
const elem=as[i];
if(elem.href.endsWith(".mp3")){
songs.push(elem.href.split("/Music/")[1]);
}

}

return songs;
}

async function con() {
    // songs list
    songs = await getMusic();

    let songList = document.querySelector(".songlist ul");
    for (const song of songs) {
        songList.innerHTML += `<li>
            <div class="info">
                <div>${song.replaceAll("%20"," ").replaceAll("%26"," ")}</div>
                <div>Artist Name</div>
            </div>
            <div class="playnow">
                <img src="./img/play.svg" alt="">
                <span>Play Now</span>
            </div>
        </li>`;
    }
function playMusic(songName){
    // let audio = new Audio(`http://127.0.0.1:5500/Music/${songName}`);
    currsong.src=`http://127.0.0.1:5500/Music/${songName}`;
   currsong.play();
    play.src="./img/pause.svg";

    let decodedSongName = decodeURIComponent(songName);
    decodedSongName=decodedSongName.replace(".mp3","");
    document.querySelector("#song-name").innerHTML=decodedSongName;

    document.querySelector("#duration").innerHTML="00:00 / 00:00";






}
function playNextSong(){
    
let index=songs.indexOf(currsong.src.split("/").slice(-1)[0]);
if((index+1)<songs.length){
    currentSongIndex=index+1;
    playMusic(songs[currentSongIndex]);
}


}
function playPrevSong(){
    let index=songs.indexOf(currsong.src.split("/").slice(-1)[0]);
    if((index-1)>=0){
        currentSongIndex=index-1;
        playMusic(songs[currentSongIndex]);
    }
}
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", elem => {
          let songName=(e.querySelector(".info").firstElementChild.innerHTML);
          console.log(songName);
            playMusic(songName);
        }
        );

       
    });




    play.addEventListener("click", () => {
        if(currsong.paused){
            currsong.play();
            play.src="./img/pause.svg";
        }
        else{
            currsong.pause();
            play.src="./img/play.svg";
        }

    });
    

   next.addEventListener("click",()=>{
         playNextSong();

   });

    prev.addEventListener("click",()=>{
        playPrevSong();

    });
    currsong.addEventListener("timeupdate",()=>{
        console.log(currsong.currentTime,currsong.duration);
       document.querySelector("#duration").innerHTML=`${secondsToMinutesSeconds(currsong.currentTime)}/${secondsToMinutesSeconds(currsong.duration)}`
        document.querySelector(".circle").style.left=`${(currsong.currentTime/currsong.duration)*100}%`;
    });


document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("input",(e)=>{
    currsong.volume=e.target.value;
    if(e.target.value==0){
        volume.src="./img/mute.svg";
    }
    else{
        volume.src="./img/volume.svg";
    }
});
let range=document.querySelector(".range");
document.querySelector("#volume").addEventListener("click",(e)=>{
    if(currsong.volume>0){
        lastVolume=currsong.volume;
        currsong.volume=0;
        volume.src="./img/mute.svg";
        range.getElementsByTagName("input")[0].value=0;

    }
    else{
        currsong.volume=lastVolume;
        volume.src="./img/volume.svg";
        range.getElementsByTagName("input")[0].value=lastVolume;
    }

});







};
con();









