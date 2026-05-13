document.getElementById("year").textContent = new Date().getFullYear();

const galleryGrid = document.getElementById("gallery-grid");
const galleryPageButtons = document.querySelectorAll(".gallery-page-button");

const imagesPerPage = 16;
const totalImages = 32;

function loadGallery(page) {
  galleryGrid.innerHTML = "";

  const start = (page - 1) * imagesPerPage + 1;
  const end = Math.min(start + imagesPerPage - 1, totalImages);

  for (let i = start; i <= end; i++) {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const button = document.createElement("button");
    button.className = "gallery-button";
    button.type = "button";

    const img = document.createElement("img");
    img.src = `assets/gallery/gallery-${i}.jpeg`;
    img.alt = `Baby Boo dress ${i}`;
    img.loading = "lazy";

    img.onerror = function () {
      figure.remove();
    };

    button.appendChild(img);
    figure.appendChild(button);
    galleryGrid.appendChild(figure);
  }
}

galleryPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    galleryPageButtons.forEach((btn) => btn.classList.remove("is-active"));

    button.classList.add("is-active");

    const page = Number(button.dataset.page);
    loadGallery(page);
  });
});

loadGallery(1);
