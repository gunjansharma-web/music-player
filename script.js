console.log("welcome to musica");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songsItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "dj aloya music",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "dj biinaya music",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "dj aliba music",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "dj divya music",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "dj herry music",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "dj soneiii music",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "dj vinetu music",
    filePath: "songs/7.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "dj hidjii music",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "dj aaarus music",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
];

songsItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("bi-pause-circle");
    masterPlay.classList.add("bi-play-circle");
    gif.style.opacity = "0";
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("bi-pause-circle-fill");
      element.classList.add("bi-play-circle-fill");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("bi-play-circle-fill");
      e.target.classList.add("bi-pause-circle-fill");
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText= songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("bi-play-circle-fill");
      masterPlay.classList.add("bi-pause-circle-fill");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText= songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = "1";
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");
});
document.getElementById("pervious").addEventListener("click", () => {
  if (songIndex <=0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText= songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = "1";
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");
});
