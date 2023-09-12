  // Get the image element
  const backgroundImage = document.getElementById('background-image');

  // Add a load event listener
  backgroundImage.addEventListener('load', () => {
      // Fetch the content of the content HTML file
      fetch('/home-css/content.html')
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
      });
  });