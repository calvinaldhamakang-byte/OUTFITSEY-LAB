// ====================
// LOGIKA JOIN WAITLIST
// ====================
const btn = document.getElementById('joinBtnFooter'); // Get the "Join Waitlist" button element
const input = document.getElementById('emailInputFooter'); // Get the email input field element

// Add click event listener to the button
btn.addEventListener('click', () => { // When the button is clicked
if (input.value.trim() === "") { // Check if the input field is empty (after trimming whitespace)
 //error message
    alert("Please enter your email to join the waitlist! 😊"); // Show an alert message asking the user to enter their email if the input field is empty
    } else { // If the input field is not empty, proceed with the join waitlist logic
    //change button text
            const originalText = btn.innerText; // Store the original button text to reset it later
            btn.innerText = "Joined!"; // Change the button text to "Joined!" to indicate that the user has successfully joined the waitlist
            //change button color
            btn.classList.replace('bg-zinc-900', 'bg-green-600'); // Change the button background color to green to visually indicate success
            btn.classList.replace('dark:bg-zinc-100', 'dark:bg-green-600'); // Change the button background color in dark mode to green as well
            btn.classList.add('text-white'); // Change the button text color to white for better contrast against the green background
            alert("Thank you for joining the waitlist! 🎉"); // Show a thank you alert message to the user after they have successfully joined the waitlist

            //reset button after 3 seconds
            setTimeout(() => { // After 3 seconds, reset the button text and color back to the original state
                btn.innerText = originalText; // Reset the button text to the original text
                btn.classList.replace('bg-green-600', 'bg-zinc-900'); // Reset the button background color to the original color
                btn.classList.replace('dark:bg-green-600', 'dark:bg-zinc-100'); // Reset the button background color in dark mode to the original color
                input.value = ""; // Clear the email input field after resetting the button
                }, 3000); // Set a timeout of 3000 milliseconds (3 seconds) to reset the button and clear the input field after showing the success message
            }      
    });   