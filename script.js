const audio = document.getElementById("audio");
const playButton = document.querySelector(".play-btn");
const socialLinks = document.getElementById("socialLinks");

// Fungsi play/pause audio
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "❚❚"; // pause icon
  } else {
    audio.pause();
    playButton.textContent = "▶"; // play icon
  }
}

// Tampilkan pesan error jika audio gagal diputar
audio.onerror = () => {
  console.error("Error: Audio tidak ditemukan atau tidak dapat diputar.");
};

// Tampilkan/sembunyikan tautan media sosial
function toggleSocial() {
  socialLinks.style.display = (socialLinks.style.display === 'flex') ? 'none' : 'flex';
}
