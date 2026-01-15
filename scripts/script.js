// Smooth Scrolling
document.querySelectorAll('nav ul li a, .back-to-top').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Check if the target is an internal link
        if (targetId.startsWith("#")) {
            e.preventDefault(); // Prevent default link behavior
            const target = document.querySelector(targetId); // Get the target element
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
            }
        } else {
            // This section allows navigation to other pages normally
        }
    });
});

// Show/Hide Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    // Check the scroll position
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

// Back to Top Scroll Functionality
backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
});