import { menuBtn, showMenu } from './menu';
import { showContents } from './scroll';
import { showCover } from './loading';

const init = () => {
  window.onload = showCover();
  menuBtn.addEventListener('click', showMenu);
  window.addEventListener('scroll', showContents);
}

init();