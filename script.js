document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const textContainer = document.getElementById("text-container");

    // Ensure correct positioning (place text to the left)
    textContainer.style.position = "absolute";
    textContainer.style.left = "-50px"; // Adjust this value as needed
    textContainer.style.top = "50%";
    textContainer.style.transform = "translateY(50%)";
    
    const images = ["/images/fotoich.png", "/images/1.png"];
    let imageIndex = 0;
    let switchCount = 0;
    let isAnimating = false;
    let imageInterval;

    // Ensure there's an <img> inside imageContainer
    let imgElement = imageContainer.querySelector("img");
    if (!imgElement) {
        imgElement = document.createElement("img");
        imageContainer.appendChild(imgElement);
    }

    function switchImages() {
        if (switchCount === 0) {
            animateText("Willkommen zu meinem Portfolio");
            imageContainer.style.transition = "transform 0.5s ease-in-out";
            imageContainer.style.transform = "translateX(50px)";
            isAnimating = true;
        }

        if (textContainer.innerHTML === "Willkommen zu meinem Portfolio" && isAnimating) {
            setTimeout(() => {
                imageContainer.style.transform = "translateX(0)";
                setTimeout(() => {
                    textContainer.innerHTML = "";
                    clearInterval(imageInterval);
                    imgElement.src = "/images/fotoich.png";
                    isAnimating = false; // Allow new click
                }, 500);
            }, 1000);
            return;
        }

        imgElement.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length;
        switchCount++;
    }

    function animateText(text) {
        let i = 0;
        textContainer.innerHTML = "";
        clearInterval(textContainer.dataset.interval); // Clear previous interval

        const interval = setInterval(() => {
            if (i < text.length) {
                textContainer.innerHTML += text[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150);

        textContainer.dataset.interval = interval; // Store interval ID
    }

    imageContainer.addEventListener("click", function () {
        if (isAnimating) return; // Prevent multiple triggers
        clearInterval(imageInterval); // Stop any existing animation

        switchCount = 0;
        imageIndex = 0;
        isAnimating = false;
        imageInterval = setInterval(switchImages, 150);
    });
});
