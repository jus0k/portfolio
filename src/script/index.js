import { menuBtn, showMenu } from './menu';
import { rotateImage, showContents } from './scroll';
import { loadPage } from './ajax';
import { scrollAbout } from './about';

const init = () => {
  scrollAbout();
  rotateImage();
  loadPage();
  menuBtn.addEventListener('click', showMenu);
  window.addEventListener('scroll', showContents);
}

init();