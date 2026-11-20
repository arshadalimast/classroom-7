 
const movieContainer = document.querySelector('.movie');
const images = movieContainer.querySelectorAll('img');
let currentIndex = 0;

// Page load hote hi pehli image par focus aur outline laane ke liye
if (images.length > 0) {
  images[currentIndex].focus();
}

// Keyboard ke arrow keys ko handle karne ke liye
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].focus();
    images[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].focus();
    images[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
});