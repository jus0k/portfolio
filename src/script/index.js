import { menuBtn, showMenu } from './menu'

const init = () => {
  menuBtn.addEventListener('click', showMenu);
}

init();