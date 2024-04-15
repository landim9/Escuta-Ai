const dialog = document.querySelectorAll('.dialog');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const playlist = document.getElementById('playlist');
const coverImage = document.getElementById('coverImage');
let currentSongIndex = 0;

dialog.forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
        if(event.target.classList.contains('contactDialog')) {
            closeDialog('contact');
        }else if(event.target.classList.contains('matriculaDialog')) {
            closeDialog('matricula');
        }
    });
})


function openDialog(e) {

    let dialog

    if(e == 'contact') {
        dialog = document.querySelector('.contactDialog');
    }else {
        dialog = document.querySelector('.matriculaDialog');
    }

    dialog.classList.remove('hidden');

    dialog.querySelector('div').style.animation = 'openDialog 0.5s forwards';

    setTimeout(() => {
        dialog.style.animation = 'none';
    }, 500);
}

function closeDialog(e) {
    let dialog

    if(e == 'contact') {
        dialog = document.querySelector('.contactDialog');
    } else {
        dialog = document.querySelector('.matriculaDialog');
    }

    dialog.style.animation = 'closeDialog 0.5s forwards';


    setTimeout(() => {
        dialog.style.animation = 'none';
        dialog.classList.add('hidden');
    }, 500);
}

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = `<ion-icon class="icon" name="pause-circle-outline"></ion-icon>`;
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = `<ion-icon class="icon" name="play-circle-outline"></ion-icon>`;
  }
});


function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.children.length;
    loadSong();
}
function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.children.length) % playlist.children.length;
    loadSong();
}

function loadSong() {
  const songItem = playlist.children[currentSongIndex];
  const songSrc = songItem.dataset.src;
  const coverSrc = songItem.dataset.cover;

    audioPlayer.src = songSrc;
    coverImage.src = coverSrc;
    audioPlayer.play();
}