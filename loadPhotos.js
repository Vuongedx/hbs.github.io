const postContainer = document.querySelector('#post-container');
const fs = require('fs');

fs.readdir('posts', (err, files) => {
  if (err) throw err;

  const htmlFiles = files.filter(file => file.endsWith('.html'));

  fetch('posts')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, 'text/html');
      const links = html.querySelectorAll('a');
      for (const [i, link] of links.entries()) {
        const file = htmlFiles[i];
        const url = file.replace('.html', '');
        const title = link.textContent.trim();
        const postElement = document.createElement('div');
        postElement.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'mb-5');
        postElement.innerHTML = `
          <figure class="effect-ming tm-video-item">
            <img src="img/img-03.jpg" alt="Image" class="img-fluid">
            <figcaption class="d-flex align-items-center justify-content-center">
              <h2>${title}</h2>
              <a href="posts/${url}">View more</a>
            </figcaption>
          </figure>
          <div class="d-flex justify-content-between tm-text-gray">
            <span class="tm-text-gray-light">${new Date().toLocaleDateString()}</span>
            <span>0 views</span>
          </div>
        `;
        postContainer.appendChild(postElement);
      }
    });
});
