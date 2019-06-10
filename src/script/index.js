import { menuBtn, showMenu } from './menu';
import { showContents } from './scroll'

const init = () => {
  menuBtn.addEventListener('click', showMenu);
  window.addEventListener('scroll', showContents);
}

init();