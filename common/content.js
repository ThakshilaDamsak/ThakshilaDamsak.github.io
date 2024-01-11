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
    showError()
  });
});

// Wait for all the promises to resolve
Promise.all(imagePromises).then(() => {
  loadPage()
});

function showError() {
      // Create the element
      let imageAlert = document.createElement('div');
      imageAlert.className = 'imageAlert';
      imageAlert.innerHTML = '<span><iconify-icon icon="material-symbols:error"></iconify-icon> Some images may not load!</span>';
      imageAlert.style.marginBottom = '0px';
      // Append the element to the body
      document.body.appendChild(imageAlert);
      // Set a timer to hide the element after 5 seconds
      setTimeout(() => {
        imageAlert.style.opacity = '0';
        imageAlert.style.transform = 'translateY(10px)';
      }, 5000);
      setTimeout(() => {
        imageAlert.style.display = 'none';
      }, 5200);
}

function loadPage() {

   // All the images have loaded or failed gracefully or were already cached
   console.log('All images handled');

   // Fetch the content of the content HTML file
   fetch('./content.html')
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
 
 
         // Get the hash value from the URL
         const hash = window.location.hash;
 
         // Check if the hash is not empty
         if (hash) {
           // Get the element with the id matching the hash
           const element = document.getElementById(hash.slice(1));
 
           // Check if the element exists
           if (element) {
             // Scroll to the element
             element.scrollIntoView();
           }
         }
 
     });

}

  let loadingContainer = document.getElementById('loading-container');
  let loadingTooLong = document.createElement('div');
  loadingTooLong.className = 'loading-too-long';
  loadingTooLong.id = 'loading-too-long';
  loadingTooLong.innerHTML = '<span>Maybe some third-party images slow down the page loading.</span><button onclick="forceLoadPage()" class="regular-button force-load-button"> Force load webpage! </button>';
  loadingContainer.appendChild(loadingTooLong);

setTimeout(() => {
  let loadingTooMuchLong = document.getElementById('loading-too-long');
  loadingTooMuchLong.style.opacity = '1';
  loadingTooMuchLong.style.visibility = 'visible';
  loadingTooMuchLong.style.transform = 'translateY(0px)';
}, 8000);

function forceLoadPage() {
  showError()
  loadPage()
}