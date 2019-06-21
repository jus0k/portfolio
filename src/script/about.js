const scrollAbout = () => {
  let latestKnownScrollY = 0,
      ticking = false;

  function update() {
    ticking  = false;
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer !== null) {
      scrollContainer.style.transform = `translateX(-${latestKnownScrollY / 5}px)`;
    }
  }

  function onScroll() {
    latestKnownScrollY = window.scrollY;
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }
  
  window.addEventListener('scroll', onScroll, false);

}

export { scrollAbout };