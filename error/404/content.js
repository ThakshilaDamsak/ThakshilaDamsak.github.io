// Get the container element for the images
const imageContainer = document.getElementById('image-container');

// Get all the image elements inside the container
const imageElements = Array.from(imageContainer.getElementsByTagName('img'));

// Create an array of promises for each image element
const imagePromises = imageElements.map(image => {
  // Return a new promise that resolves when the image loads
  return new Promise(resolve => {
    image.addEventListener('load', resolve);
  });
});

// Wait for all the promises to resolve
Promise.all(imagePromises).then(() => {
  // All the images have loaded
  console.log('All images loaded');

  // Fetch the content of the content HTML file
  fetch('/error/404/content.html', {
    // Add cache-control headers to avoid caching
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
    .then(response => response.text())
    .then(html => {
      // Insert the content HTML into the container
      document.getElementById('page-content').innerHTML = html;

      // Execute JavaScript code within the container
      const scriptElements = Array.from(document.getElementById('page-content').getElementsByTagName('script'));
      scriptElements.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      alert('Something went wrong. Please try again.');
    });
});
