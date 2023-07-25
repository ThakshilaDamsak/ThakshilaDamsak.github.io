// Fetch the content of the footer HTML file
fetch('/shared-css/menubar.html')
.then(response => response.text())
.then(html => {
// Insert the footer HTML into the container
document.getElementById('menubar').innerHTML = html;

// Execute JavaScript code within the footer
const scriptElements = Array.from(document.getElementById('menubar').getElementsByTagName('script'));
scriptElements.forEach(script => {
const newScript = document.createElement('script');
newScript.textContent = script.textContent;
document.body.appendChild(newScript);
});
});

// Fetch the content of the footer HTML file
fetch('/shared-css/footer.html')
    .then(response => response.text())
    .then(html => {
    // Insert the footer HTML into the container
    document.getElementById('footer').innerHTML = html;

    // Execute JavaScript code within the footer
    const scriptElements = Array.from(document.getElementById('footer').getElementsByTagName('script'));
    scriptElements.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
    });
    });