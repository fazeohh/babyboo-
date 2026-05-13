const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const galleryGrid = document.getElementById("gallery-grid");
const galleryPageButtons = document.querySelectorAll(".gallery-page-button");

const imagesPerPage = 16;
const totalImages = 32;

function createImagePathOptions(i) {
  return [
    `assets/gallery/gallery-${i}.jpeg`,
    `assets/gallery-${i}.jpeg`,
    `assets/collection-${i}.jpeg`
  ];
}

function loadImageWithFallback(i, figure, img) {
  const paths = createImagePathOptions(i);
  let pathIndex = 0;

  function tryNextPath() {
    if (pathIndex >= paths.length) {
      figure.remove();
      return;
    }

    img.src = paths[pathIndex];
    pathIndex++;
  }

  img.onerror = tryNextPath;
  tryNextPath();
}

function loadGallery(page) {
  if (!galleryGrid) return;

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
    img.alt = `Baby Boo dress ${i}`;
    img.loading = "lazy";

    button.appendChild(img);
    figure.appendChild(button);
    galleryGrid.appendChild(figure);

    loadImageWithFallback(i, figure, img);
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
