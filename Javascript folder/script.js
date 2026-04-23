// ============================
// LOGIC GREETING BASED ON TIME
// ============================
function updateGreeting() { // Function to update the greeting message based on the current time
    const greetingElement = document.getElementById('greeting'); // Get the greeting element where the message will be displayed
    const hours = new Date().getHours(); // Get current hour 
    let message = ""; // Variable to hold the greeting message
    // Determine the appropriate greeting message based on the hour of the day
    if (hours >= 5 && hours < 12) { // If the hour is between 5 AM and 12 PM
        message = "Good Morning! ☀️"; // Set the greeting message to "Good Morning!" with a sun emoji
    } else if (hours >= 12 && hours < 18) { // If the hour is between 12 PM and 6 PM
        message = "Good Afternoon! 🌤️"; // Set the greeting message to "Good Afternoon!" with a sun behind cloud emoji
    } else if (hours >= 18 && hours < 22) { // If the hour is between 6 PM and 10 PM
        message = "Good Evening! 🌙"; // Set the greeting message to "Good Evening!" with a moon emoji
    } else { // If the hour is between 10 PM and 5 AM
        message = "Working late? Don't forget to rest! 🌙"; // Set the greeting message to a reminder to rest with a moon emoji
    }
    // Update the text content of the greeting element with the appropriate message
    greetingElement.textContent = message; // Set the greeting message in the DOM
} // Call the function to set the initial greeting message when the page loads
updateGreeting(); // Call on page load  

// ==================================
// LOGIC FOR DETECTING SERVICE CHOICE
// ==================================
const serviceCards = document.querySelectorAll('#layanan ul li'); // Select all service cards
serviceCards.forEach(card => { // Loop through each service card
    // Add hover event to detect user interest
    card.addEventListener('mouseenter', () => { // When user hovers over a service card
        const serviceName = card.querySelector('h3').innerText; // Get the service name from the card's heading
        console.log(`User is interested in: ${serviceName}`); // Log the service name to the console (or send to analytics)
    });
});

// ============================
// LOGIC FOR LOADING ANIMATION
// ============================
window.addEventListener('load', () => { // Add event listener for when the window has fully loaded
    const loader = document.getElementById('loader'); // Get the loader element
    const loaderBar = document.getElementById('loaderBar'); // Get the loader bar element

    // Simulate loading progress to 100%
    // kita kasih delay untuk melihat animasi loadingnya
    setTimeout(() => {
        loaderBar.style.width = '100%';
    }, 100); // Start loading animation after 100ms

    // After the loading animation is complete, hide the loader
    setTimeout(() => {
        // efek transisi: memudarkan loader sebelum menghilang dan ngezoom
        loader.classList.add('opacity-0', 'scale-110', 'pointer-events-none'); // Add classes to fade out and zoom the loader
        // biar badannya nggak berat, kita set display none setelah animasi selesai
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 1500); // Hide loader after 1.5 seconds (adjust as needed for animation timing)
});