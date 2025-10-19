function updateClock() {
  const clock = document.querySelector('[data-testid="test-user-time"]');
  clock.textContent = `${Date.now()}`;
}

setInterval(updateClock, 100);

updateClock();

const images = [
  "./assets/images/ChatGPT Image Oct 19, 2025, 09_01_31 AM.png",
  "./assets/images/WhatsApp Image 2025-10-19 at 09.09.16_bc1abe0a.jpg",
  "./assets/images/ChatGPT Image Oct 19, 2025, 09_11_35 AM.png",
  "./assets/images/ChatGPT Image Oct 19, 2025, 09_10_37 AM.png",
  "./assets/images/ChatGPT Image Oct 19, 2025, 08_57_28 AM.png",
  "./assets/images/WhatsApp Image 2025-10-19 at 09.09.16_bc1abe0a.jpg",
];

let currentIndex = 0;
const avatarImg = document.getElementById("avatar");

function changeAvatar() {
  currentIndex = (currentIndex + 1) % images.length;
  avatarImg.src = images[currentIndex];
}

setInterval(changeAvatar, 10000);
