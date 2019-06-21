const scrollAbout = () => {
  let latestKnownScrollY = 0,
      ticking = false;

  function update() {
    ticking  = false;
    const scrollGallery = document.getElementById('scroll-gallery'),
      scrollText = document.getElementById('scroll-text'),
      sectionTitle = document.querySelector('.section-values__title > h2');
    
    if (scrollGallery !== null) {
      scrollGallery.style.transform = `translateX(-${latestKnownScrollY / 5}px)`;
    }

    if (latestKnownScrollY > 700 && latestKnownScrollY < 2000) {
      sectionTitle.classList.add('show');
    } else {
      sectionTitle.classList.remove('show');
    }

    if (scrollText !== null && latestKnownScrollY > 2500) {
      scrollText.style.transform = `translateX(-${(latestKnownScrollY - 2500)}px)`;
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