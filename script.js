document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-wrapper"); // Target the wrapper
    const textContainer = document.getElementById("text-container");
    const imgElement = imageContainer.querySelector("img"); // Get the <img> inside

    textContainer.style.transform = "translateY(-1000px)"; // Elevate text
    textContainer.style.transform = "translateY(-500px)"; // Elevate text

    const images = ["/images/fotoich.png", "/images/1.png"];
    let imageIndex = 0;
    let switchCount = 0;
    let isAnimating = false;
    let isTextDisplayed = false;
    let imageInterval;

    function switchImages() {
        if (switchCount === 0) {
            animateText("Willkommen zu meinem Portfolio");
            imageContainer.style.transition = "transform 0.5s ease-in-out";
            imageContainer.style.transform = "translateX(50px)";
            isAnimating = true;
        }

        if (isTextDisplayed && isAnimating) {
            setTimeout(() => {
                imageContainer.style.transform = "translateX(0)";
                setTimeout(() => {
                    textContainer.textContent = "";
                    clearInterval(imageInterval);
                    imgElement.src = "/images/fotoich.png";
                }, 500);
            }, 1000);
            isAnimating = false;
            return;
        }

        imgElement.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length;
        switchCount++;
    }

    function animateText(text) {
        let i = 0;
        textContainer.textContent = "";
        isTextDisplayed = false;
        const interval = setInterval(() => {
            if (i < text.length) {
                textContainer.textContent += text[i];
                i++;
            } else {
                clearInterval(interval);
                isTextDisplayed = true;
            }
        }, 150);
    }

    imageContainer.addEventListener("click", function () {
        if (isAnimating) return;
        switchCount = 0;
        isAnimating = true;
        imageIndex = 0;
        imageInterval = setInterval(switchImages, 150);
    });
});
