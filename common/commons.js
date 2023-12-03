//Get Header

// Fetch the content of the social-links HTML file
  fetch('/common/header.html')
  .then(response => response.text())
  .then(html => {
    // Insert the social-links HTML into the container
    document.getElementById('header').innerHTML = html;

    // Execute JavaScript code within the container
    const scriptElements = Array.from(document.getElementById('header').getElementsByTagName('script'));
    scriptElements.forEach(script => {
      const newScript = document.createElement('script');
      newScript.textContent = script.textContent;
      // Add a load event listener to the new script element
      newScript.addEventListener('load', function() {
        // Execute the function that updates the content of the page
        this.textContent();
      });
      document.body.appendChild(newScript);
    });
  });


  //Get footer

  // Fetch the content of the social-links HTML file
  fetch('/common/footer.html')
  .then(response => response.text())
  .then(html => {
    // Insert the social-links HTML into the container
    document.getElementById('footer').innerHTML = html;

    // Execute JavaScript code within the container
    const scriptElements = Array.from(document.getElementById('footer').getElementsByTagName('script'));
    scriptElements.forEach(script => {
      const newScript = document.createElement('script');
      newScript.textContent = script.textContent;
      // Add a load event listener to the new script element
      newScript.addEventListener('load', function() {
        // Execute the function that updates the content of the page
        this.textContent();
      });
      document.body.appendChild(newScript);
    });
  });

