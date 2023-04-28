const fs = require('fs');

fs.readdir('./posts', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const urls = files
    .filter(file => file.endsWith('.html'))
    .map(file => `https://example.com/posts/${file}`);

  for (const url of urls) {
    const url = url
    const title = link.textContent.trim();
    const postElement = document.createElement('div');
    postElement.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'mb-5');
    postElement.innerHTML = `
      <figure class="effect-ming tm-video-item">
        <img src="img/img-03.jpg" alt="Image" class="img-fluid">
        <figcaption class="d-flex align-items-center justify-content-center">
          <h2>Kỹ năng sống</h2>
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
