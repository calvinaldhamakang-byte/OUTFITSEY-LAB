// =======================
// LOGIKA FAQ ACCORDION
// =======================
const faqButtons = document.querySelectorAll('.faq-button'); // Select all FAQ buttons
    faqButtons.forEach(button => { // Loop through each FAQ button
        button.addEventListener('click', () => { // Add click event listener to each button
        const answer = button.nextElementSibling; // Get the corresponding answer element (the next sibling of the button)
        const icon = button.querySelector('span:last-child'); // Get the icon element (the last child span of the button)
        // Toggle the visibility of the answer and rotate the icon
        answer.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the answer
        icon.classList.toggle('rotate-180'); // Toggle the 'rotate-180' class to rotate the icon when the answer is shown/hidden
        });            
    }); 
 
// =======================
// LOGIKA DARK MODE NATIVE
// =======================
const themeToggle = document.getElementById('themeToggle'); // Get the theme toggle button element
const themeIcon = document.getElementById('themeIcon'); // Get the theme icon element (the span inside the toggle button)
const html = document.documentElement; // Get the root HTML element to apply the dark class
    // Add click event listener to the theme toggle button
    themeToggle.addEventListener('click', () => { // When the toggle button is clicked
        html.classList.toggle('dark'); // Toggle the 'dark' class on the root
        // Update the theme icon and save the user's preference in localStorage
        if (html.classList.contains('dark')) { // If dark mode is now active
        themeIcon.textContent = '🌙'; // Update the theme icon to the moon icon
        localStorage.setItem('theme', 'dark'); // Save the user's preference for dark mode in localStorage
        } else { // If light mode is now active
        themeIcon.textContent = '☀️'; // Update the theme icon to the sun icon
        localStorage.setItem('theme', 'light'); // Save the user's preference for light mode in localStorage
        }
    });

    // Check saved theme on load
    if (localStorage.getItem('theme') === 'light') { // If the saved theme is light mode
        html.classList.remove('dark'); // Ensure the 'dark' class is removed from the root element
        themeIcon.textContent = '☀️'; // Set the theme icon to the sun icon for light mode
        } else { // If the saved theme is dark mode or no preference is saved
        html.classList.add('dark'); // Ensure the 'dark' class is added to the root element
        themeIcon.textContent = '🌙'; // Set the theme icon to the moon icon for dark mode
        }

// ==================================
// LOGIKA SCROLL PROGRESS BAR
// ==================================
const backToTop = document.getElementById('backToTop'); // Get the "Back to Top" button element

window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get the current scroll position
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Calculate the total scrollable height of the document
    const scrolled = (winScroll / height) * 100; // Calculate the percentage of the page that has been scrolled
    // Update the width of the scroll progress bar based on the scroll percentage
    document.getElementById('scrollBar').style.width = scrolled + "%";

    // Back to top logic
    if (window.scrollY > 400) { // if the user has scrolled down more than 400 pixels
        backToTop.classList.remove('opacity-0', 'translate-y-10'); // show the "back to top" button by removing the classes that hide it
        backToTop.classList.add('opacity-100', 'translate-y-0'); // add classes to make the button fully visible and in its original position
    } else { // if the user is near the top of the page
        backToTop.classList.remove('opacity-100', 'translate-y-0'); // hide the "back to top" button by removing the classes that show it
        backToTop.classList.add('opacity-0', 'translate-y-10'); // add classes to make the button invisible and move it down slightly for a smooth hiding effect
    }
});

// Add click event listener to the "Back to Top" button
document.getElementById('backToTop').addEventListener('click', () => { // when the "back to top" button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smoothly scroll the user back to the top of the page
});
    // ===============================
    // Logika Reveal On Scroll SEYBYTE
    // ===============================
 const observerOption = {
    threshold: 0.1 // 10% elemen muncul di layar, langsung triger animasinya
 };

 // Buat Intersection Observer untuk memantau elemen dengan kelas 'reveal'
const observer = new IntersectionObserver ((entries) => { // Callback function yang dipanggil ketika elemen yang diamati masuk atau keluar dari viewport
    entries.forEach(entry => { // Loop melalui setiap entry yang diamati
        if (entry.isIntersecting) { // Jika elemen terlihat di viewport
            entry.target.classList.add('active'); // Tambahkan kelas 'active' untuk memicu animasi
        };
    });
}, observerOption);

// Pilih semua elemen dengan kelas 'reveal' dan amati mereka
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
