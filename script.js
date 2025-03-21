
imageContainer.addEventListener("click", function() {

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the image and text elements from the HTML using their IDs
    const imageContainer = document.getElementById("image-container");
    const textContainer = document.getElementById("text-container");
    
    // Position text container on the left 
    textContainer.style.transform = "translate(-250px, -250px)";  // Moves it
    
    // Array containing the paths to the images we want to switch between
    const images = ["/images/fotoich.png", "/images/1.png"]; 
    
    // Initialize state variables
    let imageIndex = 0;    // Keep track of which image we're currently showing
    let switchCount = 0;   // Counter to track how many times we've switched images
    let isAnimating = false;   // Flag to track animation state

    /**
     * Function that handles switching between images
     * Controls the welcome text animation and image transitions
     */
    function switchImages() {
        // Show welcome text and start image animation when first called
        if (switchCount === 0) {
            animateText("Willkommen zu meinem Portfolio");
            // Move image right
            imageContainer.style.transition = "transform 0.5s ease-in-out";
            imageContainer.style.transform = "translateX(50px)";
            isAnimating = true;
        }
        
        // After text is fully displayed and animation is done, move image back
        if (textContainer.innerHTML === "Willkommen zu meinem Portfolio" && isAnimating) {
            setTimeout(() => {
                imageContainer.style.transform = "translateX(0)";
                // Clear text after image moves back
                setTimeout(() => {
                    textContainer.innerHTML = "";
                    clearInterval(imageInterval);
                    // Set final image to fotoich.png
                    imageContainer.src = "/images/fotoich.png";
                }, 500);
            }, 1000);
            isAnimating = false;
            return;
        }

        // Change the image source to show the next image
        imageContainer.src = images[imageIndex];
        // Move to next image, going back to first image if we reach the end
        imageIndex = (imageIndex + 1) % images.length;
        // Increment our counter of how many switches we've done
        switchCount++;
    }

    /**
     * Function that shows text one character at a time
     * Creates a typewriter effect for the welcome message
     * @param {string} text - The text to animate
     */
    function animateText(text) {
        // Start with first character
        let i = 0;
        // Set up a timer that runs every 150 milliseconds
        const interval = setInterval(() => {
            // If we haven't shown all characters yet
            if (i < text.length) {
                // Add the next character to the text container
                textContainer.innerHTML += text[i];
                // Move to next character
                i++;
            } else {
                // If we've shown all characters, stop the timer
                clearInterval(interval);
            }
        }, 150);
    }

    // Start the image switching process - runs every 150 milliseconds
    let imageInterval = setInterval(switchImages, 150);
});
});
