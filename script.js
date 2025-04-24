 window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('intro-audio');
    if (audio) {
      audio.play().catch((e) => {
        // Some browsers block autoplay — fallback to play on interaction
        console.log("Autoplay blocked, waiting for user interaction.");
        document.body.addEventListener('click', () => audio.play(), { once: true });
      });
    }
  
    setTimeout(() => {
      document.getElementById('intro').style.display = 'none';
    }, 6000); // Hide intro after 6s
  });
 