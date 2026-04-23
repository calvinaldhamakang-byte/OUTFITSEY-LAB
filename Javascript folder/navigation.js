// ==================================
// LOGIKA MOBILE MENU TOGGLE
// ==================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle'); // Get the mobile menu toggle button element
const mobileMenu = document.getElementById('mobileMenu'); // Get the mobile menu
const mobileMenuClose = document.getElementById('mobileMenuClose'); // Get the mobile menu close button element

// Add click event listener to the mobile menu toggle button
mobileMenuToggle.addEventListener('click', () => { // when the mobile menu toggle button is clicked
    mobileMenu.classList.toggle('translate-y-full'); // Toggle the 'translate-y-full' class to show/hide the mobile menu                mobileMenu.classList.toggle('translate-y-0'); // Toggle the 'translate-y-0' class to show/hide the mobile menu
    mobileMenu.classList.toggle('opacity-0'); // Toggle the 'opacity-0' class to fade in/out the mobile menu
    mobileMenu.classList.toggle('opacity-100'); // Toggle the 'opacity-100' class to fade in/out the mobile menu

    // Disable scrolling when the mobile menu is open
    if (mobileMenu.classList.contains('translate-y-0')) { // If the mobile menu is now open
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body to prevent background content from scrolling when the mobile menu is open
        } else { // If the mobile menu is now closed
        document.body.style.overflow = ''; // Re-enable scrolling on the body when the mobile menu is closed
        }
    });  

    // Add click event listener to the mobile menu close button
    mobileMenuClose.addEventListener('click', () => { // when the mobile menu close button is clicked
        mobileMenu.classList.add('translate-y-full'); // Add the 'translate-y-full' class to hide the mobile menu
        mobileMenu.classList.remove('translate-y-0'); // Remove the 'translate-y-0' class to hide the mobile menu
        mobileMenu.classList.add('opacity-0'); // Add the 'opacity-0' class to fade out the mobile menu
        mobileMenu.classList.remove('opacity-100'); // Remove the 'opacity-100' class to fade out the mobile menu
        document.body.style.overflow = ''; // Re-enable scrolling on the body when the mobile menu is closed
    });

    //auto close menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a'); // Get all the links inside the mobile menu
    mobileMenuLinks.forEach(link => { // Loop through each link in the mobile menu
        link.addEventListener('click', () => { // Add click event listener to each link
            mobileMenu.classList.add('translate-y-full'); // Add the 'translate-y-full' class to hide the mobile menu
            mobileMenu.classList.remove('translate-y-0'); // Remove the 'translate-y-0' class to hide the mobile menu
            mobileMenu.classList.add('opacity-0'); // Add the 'opacity-0' class to fade out the mobile menu
            mobileMenu.classList.remove('opacity-100'); // Remove the 'opacity-100' class to fade out the mobile menu
            document.body.style.overflow = ''; // Re-enable scrolling on the body when the mobile menu is closed
        });
    }); 

// ==================================
// LOGIKA NAVBAR SCROLL EFFECT
// ==================================
const navbar = document.getElementById('navbar'); // Get the navbar element
window.addEventListener('scroll', () => { // Add scroll event listener to the window
    if (window.scrollY > 50) { // If the user has scrolled down more than 50 pixels
        navbar.classList.add('rounded-2xl', 'mx-4', 'shadow-lg', 'border-all'); // Add rounded corners, horizontal margin, shadow, and border to the navbar for a more compact look
        navbar.classList.remove('border-b'); // Remove the bottom border to avoid double borders when shadow is added
        } else { // If the user is at the top of the page
        navbar.classList.remove('rounded-2xl'); // Remove rounded corners from the navbar
        navbar.classList.remove('mx-4'); // Remove horizontal margin from the navbar
        navbar.classList.remove('shadow-lg'); // Remove shadow from the navbar
        navbar.classList.remove('border-all'); // Remove border from the navbar
        navbar.classList.add('border-b'); // Add back the bottom border
        }
});