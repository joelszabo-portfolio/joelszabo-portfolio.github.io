document.querySelectorAll("nav ul li").forEach(item => {
  // Hover-Effekt: Zufällige Farbe generieren
  item.addEventListener("mouseenter", () => {
    let randomColor = getRandomColor();
    item.style.backgroundColor = randomColor;
  });

  // Rücksetzen der Farbe nach dem Verlassen
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = ""; // Zurücksetzen auf die ursprüngliche Farbe
  });

  // Klick-Effekt: Vergrößerung und Animation
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Verhindert das Laden der neuen Seite direkt

    // Füge die 'clicked'-Klasse hinzu, um den Klick-Effekt auszulösen
    item.classList.add("clicked");

    // Nach 0.3s (der Dauer der Animation) zurücksetzen
    setTimeout(() => {
      item.classList.remove("clicked");
      // Hier könnte man auch eine Weiterleitung zur nächsten Seite vornehmen:
      // window.location.href = item.querySelector("a").href;
    }, 300); // Animation dauert 0.3s
  });
});

// Funktion, um eine zufällige Farbe zu generieren
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

