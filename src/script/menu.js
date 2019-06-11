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

export { menuBtn, showMenu };