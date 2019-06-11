const item = document.querySelectorAll('.section-catalogue__item'),
      image = document.querySelectorAll('.section-catalogue__image'),
      label = document.querySelectorAll('.section-catalogue__label'),
      title = document.querySelectorAll('.section-catalogue__main-title'),
      subTitle = document.querySelectorAll('.section-catalogue__sub-title'),
      button = document.querySelectorAll('.section-catalogue__view-btn'),
      sectionMore = document.querySelector('.section-more'),
      moreTitle = document.querySelector('.section-more__title'),
      logo = document.querySelector('.header__logo');

const showContents = () => {
  let correntScroll = window.scrollY;
  let viewHeight = window.innerHeight;
  let items = item.length;

  for (let i = 0; i < items; i++) {
    if (correntScroll > viewHeight * (i + 1) - 300) {
      image[i].classList.add('show');
      label[i].classList.add('show');
      title[i].classList.add('show');
      subTitle[i].classList.add('show');
      button[i].classList.add('show');
    }
  }

  if (correntScroll > viewHeight * (items + 1) - 300) {
    sectionMore.classList.add('show');
    moreTitle.classList.add('show');
    logo.classList.add('white');
  } else {
    logo.classList.remove('white');
  }
}

export { showContents };