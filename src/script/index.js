import { menuBtn, showMenu } from './menu';
import { showContents } from './scroll';
import { loadPage } from './ajax';
import { showCover } from './loading';

const init = () => {
  menuBtn.addEventListener('click', showMenu);
  window.addEventListener('scroll', showContents);
  window.onload = showCover();
  loadPage();
}

init();