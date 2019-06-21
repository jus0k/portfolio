import { hideMenu } from './menu';

const loadPage = () => {
  const screen = document.getElementById('screen');
  const loadCover = document.querySelector('.loading-cover');
  const sectionMenu = document.querySelector('.section-menu');

  function renderHtml(html) {
    if (sectionMenu.classList.contains('show')) {
      hideMenu();
    }
    loadCover.classList.add('show');
    setTimeout(() => {
      screen.innerHTML = html;
      window.scrollTo(0, 0);
      loadCover.classList.remove('show');
    }, 1000);
  }

  function get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.send();
      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  const routes = {
    '': function () {
      get('/data/main.html')
        .then(res => renderHtml(res));
    },
    'about': function () {
      get('/data/about.html')
        .then(res => renderHtml(res));
    },
    'tripurse': function () {
      get('/data/tripurse.html')
        .then(res => renderHtml(res));
    },
    otherwise() {
      screen.innerHTML = `${location.hash} Not Found`;
    }
  };

  function router() {
    const hash = location.hash.replace('#', '');
    (routes[hash] || routes.otherwise)();
  }
  
  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', router);
}

export { loadPage };