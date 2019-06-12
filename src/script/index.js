import { menuBtn, showMenu } from './menu';
import { showContents } from './scroll';
import { showScreen } from './loading';

const init = () => {
  window.onload = showScreen();
  menuBtn.addEventListener('click', showMenu);
  window.addEventListener('scroll', showContents);
}

init();