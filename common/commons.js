// Fetch the content of the header HTML file
fetch('https://thakshiladamsak.github.io/common/header.html')
    .then(response => response.text())
    .then(html => {
    // Insert the header HTML into the container
    document.getElementById('header').innerHTML = html;

    // Execute JavaScript code within the header
    const scriptElements = Array.from(document.getElementById('header').getElementsByTagName('script'));
    scriptElements.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
    });
    });




// Get the container element for the images
const iconContainer = document.getElementById('image-container');

// Get all the image elements inside the container
const iconElements = Array.from(iconContainer.getElementsByTagName('svg')); // change imageElements to iconElements

// Create an array of promises for each image element
const iconPromises = iconElements.map(icon => { // change imagePromises to iconPromises and image to icon
  // Return a new promise that resolves when the image loads or is already cached
  return new Promise((resolve, reject) => {
    // Check if the image is already cached
    if (icon.complete) { // change image to icon
      // Resolve immediately
      resolve();
    } else {
      // Add event listeners for load and error
      icon.addEventListener('load', resolve); // change image to icon
      icon.addEventListener('error', reject); // change image to icon
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
Promise.all(iconPromises).then(() => { // change imagePromises to iconPromises
  // All the images have loaded or failed gracefully or were already cached
  console.log('All icons handled'); // change images to icons

  // Fetch the content of the social-links HTML file
  fetch('https://thakshiladamsak.github.io/common/footer.html')
    .then(response => response.text())
    .then(html => {
      // Insert the social-links HTML into the container
      document.getElementById('footer').innerHTML = html;

      // Execute JavaScript code within the container
      const scriptElements = Array.from(document.getElementById('footer').getElementsByTagName('script'));
      scriptElements.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });
    });
});
