
const musicContainer = document.getElementById('container');
const Btn_play = document.getElementById('play')
const Btn_indietro = document.getElementById('indietro').addEventListener('click', canzoneInd);
const Btn_avanti = document.getElementById('avanti').addEventListener('click', canzoneAvanti);
const canzone = document.getElementById('canzone');
const cantante = document.getElementById('cantante');
const audio = document.getElementById('audio').addEventListener('ended', canzoneAvanti);
const cover = document.getElementById('immagine');

const songs = ['Faded','Smack that','Toxic'];
const singers = ['Alan Walker','Akon ft Eminem','BoyWithUke'];

let i = 0;

loadSong(songs[i]);

function loadSong(song){
    canzone.innerText = song;
    cantante.innerText = singers[i];
    cover.src = `images/${song}.jpg`;
    audio.src = `music/${song}.mp3`;
   

}

function playS(){
  musicContainer.classList.add('play');  
  audio.play();  
}

function pauseS(){
    musicContainer.classList.remove('play');
    audio.pause();
}

function canzoneInd(){
    i--;

    if (i < 0){
        i = songs.length - 1; 
    }

    loadSong(songs[i]);
    playS();

}

function canzoneAvanti(){
    i++;

    if (i > songs.length - 1){
        i = 0; 
    }

    loadSong(songs[i]);
    playS();

}

Btn_play.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying){
        pauseS();
    }else{
        playS();
    }
});