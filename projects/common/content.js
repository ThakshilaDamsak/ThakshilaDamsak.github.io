// Get the container element for the images
const imageContainer = document.getElementById('image-container');

// Get all the image elements inside the container
const imageElements = Array.from(imageContainer.getElementsByTagName('img'));

// Create an array of promises for each image element
const imagePromises = imageElements.map(image => {
  // Return a new promise that resolves when the image loads or is already cached
  return new Promise((resolve, reject) => {
    // Check if the image is already cached
    if (image.complete) {
      // Resolve immediately
      resolve();
    } else {
      // Add event listeners for load and error
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
    }
  })
  .catch(error => {
    // Handle the error
    console.error(error);
    alert('Something went wrong. Please try again.');
    // You can also try to reload the image here, or skip it and resolve anyway
  });
});

// Wait for all the promises to resolve
Promise.all(imagePromises).then(() => {
  // All the images have loaded or failed gracefully or were already cached
  console.log('All images handled');

  // Fetch the content of the content HTML file
  fetch('./common/content.html')
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

      // Get the element with id "page-loading-home"
      const loadingElement = document.getElementById('loading-container');

      // Set its visibility to collapsed
      loadingElement.style.visibility = 'hidden';
      loadingElement.style.opacity = '0';
      loadingElement.style.transform = 'scale(115%)';

      // Set a timeout of 1 second
      setTimeout(() => {
        // Set its display to none
        loadingElement.style.display = 'none';
      }, 1000);
    });
});
