// Motion is progressive: all page content and navigation work without this file.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(element => observer.observe(element));
}

const video = document.querySelector('[data-road-video]');
if (video && !reduceMotion && 'IntersectionObserver' in window) {
  video.playbackRate = 0.5;
  const videoObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        video.playbackRate = 0.5;
        video.play().catch(() => { /* Poster remains visible if playback is blocked. */ });
      } else {
        video.pause();
      }
    }
  }, { threshold: 0.25 });
  videoObserver.observe(video);
}

document.querySelectorAll('.mobile-menu nav a').forEach(link => {
  link.addEventListener('click', () => { link.closest('details').open = false; });
});
