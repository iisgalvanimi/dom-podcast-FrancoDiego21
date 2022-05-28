const container = document.getElementById('contain');
const Btn_play = document.getElementById('play')
const Btn_indietro = document.getElementById('indietro').addEventListener('click', canzoneInd);
const Btn_avanti = document.getElementById('avanti').addEventListener('click', canzoneAvanti);
const canzone = document.getElementById('canzone');
const cantante = document.getElementById('cantante');
const audio = document.getElementById('audio').addEventListener('ended', canzoneAvanti);
const cover = document.getElementById('cover');

const songs = ['Faded', 'Smack that', 'Toxic'];
const singers = ['Alan Walker', 'Akon ft Eminem', 'BoyWithUke'];

let i = 2;


loadSong(songs[i], singers[i]);

function loadSong(song, singer){
    canzone.innerText = song;
    cantante.innerText = singer;
    audio.src = `songs/${song}.mp3`;
    cover.src = `images/${singer}.jpg`

}

function playS(){
  container.classList.add('play')  
  audio.play();  
}

function pauseS(){
    container.classList.remove('play');
    ok = 'pause'
    audio.pause();
}

function canzoneInd(){
    i--;

    if (i < 0){
        i = songs.length - 1; 
    }

    loadSong(songs[i], singers[i]);
    playS();

}

function canzoneAvanti(){
    i++;

    if (i > songs.length - 1){
        i = 0; 
    }

    loadSong(songs[i], singers[i]);
    playS();

}

Btn_play.addEventListener('click', () => {
    const ok = container.classList.contains('play');

    if (ok){
        pauseS();
    }else{
        playS();
    }
});