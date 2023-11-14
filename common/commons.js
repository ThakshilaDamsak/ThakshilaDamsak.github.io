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