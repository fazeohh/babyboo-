const galleryGrid = document.getElementById("gallery-grid");

const pageButtons = document.querySelectorAll(".page-tabs button");

const imagesPerPage = 16;

const totalImages = 32;

let currentPage = 1;

function loadGallery(page) {

  galleryGrid.innerHTML = "";

  const start = (page - 1) * imagesPerPage + 1;

  const end = Math.min(start + imagesPerPage - 1, totalImages);

  for (let i = start; i <= end; i++) {

    const img = document.createElement("img");

    img.src = `assets/gallery/gallery-${i}.jpeg`;

    img.alt = `Baby Boo dress ${i}`;

    img.loading = "lazy";

    galleryGrid.appendChild(img);
  }
}

pageButtons.forEach((button, index) => {

  button.addEventListener("click", () => {

    pageButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    currentPage = index + 1;

    loadGallery(currentPage);
  });

});

loadGallery(currentPage);
