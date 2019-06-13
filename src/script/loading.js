const cover = document.querySelector('.section-portfolio__cover');

const showCover = () => {
  if (cover !== null) {
    cover.classList.add('show');
  }
};

export { showCover };