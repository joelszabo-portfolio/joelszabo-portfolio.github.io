document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const textContainer = document.getElementById("text-container");
    
    const images = ["/images/fotoich.png", "/images/1.png"]; // Your images
    let imageIndex = 0;
    let switchCount = 0;

    function switchImages() {
        if (switchCount >= 50) {
            clearInterval(imageInterval);
            animateText("Welcome to my website");
            return;
        }
        imageContainer.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length;
        switchCount++;
    }

    function animateText(text) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                textContainer.innerHTML += text[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150);
    }

    // Start switching images every 150ms
    let imageInterval = setInterval(switchImages, 150);
});
