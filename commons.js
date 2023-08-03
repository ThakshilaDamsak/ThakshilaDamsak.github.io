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





window.onload = function() {
    // Get the toggle switch element
    var toggle = document.getElementById("ambientToggle");

    // Get the element to show or hide
    var element = document.getElementById("ambient");
    
    // Add an event listener to the toggle switch
    toggle.addEventListener("change", function() {
      // Check if the toggle switch is checked or not
      if (toggle.checked) {
        // If checked, change the class of the element to show
        element.className = "ambientShow";
      } else {
        // If not checked, change the class of the element to hide
        element.className = "ambientHide";
      }
    });
  };