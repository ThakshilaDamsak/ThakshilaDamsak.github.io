// Define a function to get the commit date from a GitHub repo
function getCommitDate(url, absoluteDateId, relativeDateId) {
    // Use fetch() to make an HTTP request to the API
    fetch(url)
      // Handle the response
      .then((response) => {
        // Check if the response is ok
        if (response.ok) {
          // Return the response as JSON
          return response.json();
        } else {
          // Throw an error
          throw new Error(`HTTP error: ${response.status}`);
        }
      })
      // Handle the JSON data
      .then((data) => {
        // Get the timestamp from the JSON data
        const timestamp = data.commit.author.date; // "2021-11-20T16:14:00Z"
  
        // Parse the timestamp and create a Date object
        const date = new Date(Date.parse(timestamp));
  
        // Log the date to the console
        console.log(date); // Sat Nov 20 2021 21:44:00 GMT+0530 (India Standard Time)
  
        // Get the current date
        const currentDate = new Date();
  
        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - date;
  
        // Define time intervals in milliseconds
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
  
        // Calculate the relative time based on the time difference
        let relativeTime;
        if (timeDifference < minute) {
          relativeTime = "just now.";
        } else if (timeDifference < hour) {
          const minutes = Math.floor(timeDifference / minute);
          relativeTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago.`;
        } else if (timeDifference < day) {
          const hours = Math.floor(timeDifference / hour);
          relativeTime = `${hours} hour${hours > 1 ? "s" : ""} ago.`;
        } else if (timeDifference < week) {
          const days = Math.floor(timeDifference / day);
          relativeTime = `${days} day${days > 1 ? "s" : ""} ago.`;
        } else if (timeDifference < month) {
          const weeks = Math.floor(timeDifference / week);
          relativeTime = `${weeks} week${weeks > 1 ? "s" : ""} ago.`;
        } else {
          const months = Math.floor(timeDifference / month);
          relativeTime = `${months} month${months > 1 ? "s" : ""} ago.`;
        }
  
        // Format the date as "yyyy.MM.dd at hh:mm a" (using user's time zone)
        const options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };
        const formattedDate = date.toLocaleString(undefined, options);
  
        // Get the elements by id
        const absoluteDateElement = document.getElementById(absoluteDateId);
        const relativeDateElement = document.getElementById(relativeDateId);
  
        // Update the content of the elements
        absoluteDateElement.textContent = formattedDate;
        relativeDateElement.textContent = relativeTime;
      })
      // Handle any errors
      .catch((error) => {
        // Log the error to the console
        console.error(error);
      });
  }