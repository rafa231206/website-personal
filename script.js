const audio = document.getElementById("audio");
const playButton = document.querySelector(".play-button");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "❚❚"; // Ubah tombol menjadi pause
  } else {
    audio.pause();
    playButton.textContent = "▶"; // Ubah tombol menjadi play
  }
}
