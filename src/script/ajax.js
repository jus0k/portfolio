const loadPage = () => {
  const screen = document.getElementById('screen');
  const loadCover = document.querySelector('.loading-cover');
  const catalogue = document.querySelector('.section-catalogue__container');
  
  const showCover = () => {
    const cover = document.querySelector('.section-portfolio__cover');
    window.scrollTo(0, 0);
    if (cover !== null) {
      cover.classList.add('show');
    }
  };

  function renderHtml(html) {
    loadCover.classList.add('show');
    setTimeout(function(){
      screen.innerHTML = html;
      loadCover.classList.remove('show');
      showCover();
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
    'tripurse': function () {
      get('/data/tripurse.html')
        .then(res => renderHtml(res));
    },
    otherwise(page) {
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