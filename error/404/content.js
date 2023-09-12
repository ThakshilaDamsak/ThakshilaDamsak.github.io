    // Fetch the content of the content HTML file
fetch('/error/404/content.html')
    .then(response => response.text())
    .then(html => {
    // Insert the footer HTML into the container
    document.getElementById('page-content').innerHTML = html;

    // Execute JavaScript code within the footer
    const scriptElements = Array.from(document.getElementById('page-content').getElementsByTagName('script'));
    scriptElements.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
    });
    });