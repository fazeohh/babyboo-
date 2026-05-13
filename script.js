const galleryGrid = document.getElementById("gallery-grid");
const totalImages = 114;

if (galleryGrid) {
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `assets/gallery/gallery-${i}.jpeg`;
    img.alt = `Baby Boo dress ${i}`;
    img.loading = "lazy";
    galleryGrid.appendChild(img);
  }
}
