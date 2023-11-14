// Get the current date
const currentDate = new Date();

// Get the last modified date of the page
const lastModifiedDate = new Date(document.lastModified);

// Format the date as "yyyy.MM.dd at hh:mm a" (using user's time zone)
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
const formattedDate = lastModifiedDate.toLocaleString(undefined, options);

// Calculate the time difference in milliseconds
const timeDifference = currentDate - lastModifiedDate;

// Define time intervals in milliseconds
const minute = 60 * 1000;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day;

// Calculate the relative time based on the time difference
let relativeTime;
if (timeDifference < minute) {
    relativeTime = "just now";
} else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    relativeTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
} else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    relativeTime = `${hours} hour${hours > 1 ? "s" : ""} ago`;
} else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    relativeTime = `${days} day${days > 1 ? "s" : ""} ago`;
} else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    relativeTime = `${weeks} week${weeks > 1 ? "s" : ""} ago`;
} else {
    const months = Math.floor(timeDifference / month);
    relativeTime = `${months} month${months > 1 ? "s" : ""} ago`;
}

// Update the content of the <span> elements
const timePassedElement = document.getElementById("time-passed");
timePassedElement.textContent = relativeTime;

const dateElement = document.getElementById("full-date");
dateElement.textContent = formattedDate;
