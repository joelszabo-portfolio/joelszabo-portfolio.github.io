let currentPage = 0; // Start bei Cover

const pages = [document.getElementById("page1"), document.getElementById("page2")];
const frontCover = document.getElementById("frontCover");
const controls = document.querySelector(".controls");

function updateBook() {
  // Seite 1 NICHT flippen bei Page 1
  if (currentPage === 0) {
    frontCover.classList.remove("hidden");
    controls.classList.remove("active");
    pages[0].classList.remove("flipped");
    pages[1].classList.remove("flipped");
  } else if (currentPage === 1) {
    frontCover.classList.add("hidden");
    controls.classList.add("active");
    pages[0].classList.remove("flipped"); // Seite 1 nicht flippen
    pages[1].classList.remove("flipped");
  } else if (currentPage === 2) {
    pages[0].classList.add("flipped");  // Seite 1 flippen
    pages[1].classList.remove("flipped");
  } else if (currentPage === 3) {
    pages[1].classList.add("flipped");  // Seite 2 auch flippen
  }
}

function openBook() {
  if (currentPage === 0) {
    currentPage = 1; // Nur erste Seite anzeigen
    updateBook();
  }
}

function nextPage() {
  console.log("Next Page Button Clicked");
  if (currentPage < 3) {
    currentPage++;
    updateBook();
  }
}

function prevPage() {
  console.log("Previous Page Button Clicked");
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
}