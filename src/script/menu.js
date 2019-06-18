const menuBtn = document.querySelector('.menu'),
      menuIcon = document.querySelector('.menu__icon--detail'),
      sectionMenu = document.querySelector('.section-menu'),
      sectionScreen = document.querySelector('.section-screen'),
      sectionMore = document.querySelector('.section-more'),
      logo = document.querySelector('.header__logo');

const showMenu = () => {
  menuIcon.classList.toggle('animate');
  menuBtn.classList.toggle('open');
  sectionMenu.classList.toggle('show');
  sectionScreen.classList.toggle('hide');
  logo.classList.toggle('white');
};

const hideMenu = () => {
  menuIcon.classList.remove('animate');
  menuBtn.classList.remove('open');
  sectionMenu.classList.remove('show');
  logo.classList.remove('white');
  sectionScreen.classList.remove('hide');
}

export { menuBtn, showMenu, hideMenu };