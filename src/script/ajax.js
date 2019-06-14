const loadPage = () => {
  const screen = document.getElementById('screen');
  const loadCover = document.querySelector('.loading-cover');
  const catalogue = document.querySelector('.section-catalogue__container');
  
  const hideMain = () => {
    loadCover.classList.add('show');
  };

  const showCover = () => {
    const cover = document.querySelector('.section-portfolio__cover');
    window.scrollTo(0, 0);
    if (cover !== null) {
      cover.classList.add('show');
    }
  };

  function renderHtml(html) {
    hideMain();
    setTimeout(function(){
      screen.innerHTML = html;
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
    'tripurse': function () {
      get('/data/tripurse.html')
        .then(res => renderHtml(res));
    },
    otherwise(page) {
      screen.innerHTML = `${page} Not Found`;
    }
  };

  function router(page) {
    (routes[page] || routes.otherwise)(page);
  }

  catalogue.addEventListener('click', e => {
    if (!e.target.parentNode || e.target.parentNode.nodeName !== 'A') return;
    e.preventDefault();
    router(e.target.parentNode.id);
  });
}

export { loadPage };