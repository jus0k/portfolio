const image = document.querySelectorAll('.section-catalogue__image'),
      label = document.querySelectorAll('.section-catalogue__label'),
      title = document.querySelectorAll('.section-catalogue__main-title'),
      subTitle = document.querySelectorAll('.section-catalogue__sub-title'),
      button = document.querySelectorAll('.section-catalogue__view-btn');

const showContents = () => {
  let correntScroll = window.scrollY;
  let viewHeight = window.innerHeight;

  if (correntScroll > (viewHeight - 300)) {
    image[0].classList.add('show');
    label[0].classList.add('show');
    title[0].classList.add('show');
    subTitle[0].classList.add('show');
    button[0].classList.add('show');
  } 
  if (correntScroll > (viewHeight * 2 - 300)) {
    image[1].classList.add('show');
    label[1].classList.add('show');
    title[1].classList.add('show');
    subTitle[1].classList.add('show');
    button[1].classList.add('show');
  }
}

export { showContents };