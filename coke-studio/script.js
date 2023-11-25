const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const preBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const currTime = document.querySelector("#currTime");
const durTime = document.querySelector("#durTime");

const songs = [
  "juice WRLD ft Benny Blanco -Real shit",
  "Lil Baby ,lil durk ft Rodware -Rich off Pain",
  "Polo G - i know",
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i-fas").classList.remove("fa-pause");
  audio.pause();
}

preBtn.addEventListener("click", preSong);
nextBtn.addEventListener("click", nextSong);

function preSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = song.length - 1;
  }
  loadSong(song[songIndex]);

  playSong();
}
