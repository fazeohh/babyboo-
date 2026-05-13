document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const galleryGrid = document.getElementById("gallery-grid");
const galleryPageButtons = document.querySelectorAll(".gallery-page-button");

/* ---------- GALLERY IMAGES ---------- */

const galleryItems = [

  /* PAGE 1 */

  { src: "assets/gallery/gallery-1.jpeg", alt: "Baby Boo Image 1", shape: "tall" },
  { src: "assets/gallery/gallery-2.jpeg", alt: "Baby Boo Image 2" },
  { src: "assets/gallery/gallery-3.jpeg", alt: "Baby Boo Image 3" },
  { src: "assets/gallery/gallery-4.jpeg", alt: "Baby Boo Image 4" },
  { src: "assets/gallery/gallery-5.jpeg", alt: "Baby Boo Image 5" },
  { src: "assets/gallery/gallery-6.jpeg", alt: "Baby Boo Image 6", shape: "wide" },
  { src: "assets/gallery/gallery-7.jpeg", alt: "Baby Boo Image 7" },
  { src: "assets/gallery/gallery-8.jpeg", alt: "Baby Boo Image 8" },
  { src: "assets/gallery/gallery-9.jpeg", alt: "Baby Boo Image 9" },
  { src: "assets/gallery/gallery-10.jpeg", alt: "Baby Boo Image 10" },
  { src: "assets/gallery/gallery-11.jpeg", alt: "Baby Boo Image 11" },
  { src: "assets/gallery/gallery-12.jpeg", alt: "Baby Boo Image 12" },
  { src: "assets/gallery/gallery-13.jpeg", alt: "Baby Boo Image 13" },
  { src: "assets/gallery/gallery-14.jpeg", alt: "Baby Boo Image 14" },
  { src: "assets/gallery/gallery-15.jpeg", alt: "Baby Boo Image 15" },
  { src: "assets/gallery/gallery-16.jpeg", alt: "Baby Boo Image 16" },

  /* PAGE 2 */

  { src: "assets/gallery/gallery-17.jpeg", alt: "Baby Boo Image 17" },
  { src: "assets/gallery/gallery-18.jpeg", alt: "Baby Boo Image 18" },
  { src: "assets/gallery/gallery-19.jpeg", alt: "Baby Boo Image 19" },
  { src: "assets/gallery/gallery-20.jpeg", alt: "Baby Boo Image 20" },
  { src: "assets/gallery/gallery-21.jpeg", alt: "Baby Boo Image 21" },
  { src: "assets/gallery/gallery-22.jpeg", alt: "Baby Boo Image 22" },
  { src: "assets/gallery/gallery-23.jpeg", alt: "Baby Boo Image 23", shape: "tall" },
  { src: "assets/gallery/gallery-24.jpeg", alt: "Baby Boo Image 24" },
  { src: "assets/gallery/gallery-25.jpeg", alt: "Baby Boo Image 25" },
  { src: "assets/gallery/gallery-26.jpeg", alt: "Baby Boo Image 26" },
  { src: "assets/gallery/gallery-27.jpeg", alt: "Baby Boo Image 27" },
  { src: "assets/gallery/gallery-28.jpeg", alt: "Baby Boo Image 28" },
  { src: "assets/gallery/gallery-29.jpeg", alt: "Baby Boo Image 29", shape: "wide" },
  { src: "assets/gallery/gallery-30.jpeg", alt: "Baby Boo Image 30" },
  { src: "assets/gallery/gallery-31.jpeg", alt: "Baby Boo Image 31" },
  { src: "assets/gallery/gallery-32.jpeg", alt: "Baby Boo Image 32" }

];

/* ---------- PAGE SETTINGS ---------- */

const itemsPerPage = 16;

let activePage = 1;

/* ---------- LIGHTBOX ---------- */

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  lightboxImage.alt = "";

  document.body.style.overflow = "";
};

/* ---------- RENDER GALLERY ---------- */

const renderGalleryPage = (page) => {

  const start = (page - 1) * itemsPerPage;

  const end = start + itemsPerPage;

  const pageItems = galleryItems.slice(start, end);

  galleryGrid.innerHTML = "";

  pageItems.forEach((item) => {

    const figure = document.createElement("figure");

    figure.className = item.shape
      ? `gallery-item ${item.shape}`
      : "gallery-item";

    const button = document.createElement("button");

    button.className = "gallery-button";

    button.type = "button";

    button.dataset.image = item.src;

    button.dataset.alt = item.alt;

    const img = document.createElement("img");

    img.src = item.src;

    img.alt = item.alt;

    img.loading = "lazy";

    /* HIDE BROKEN IMAGES */

    img.onerror = function () {
      figure.remove();
    };

    button.appendChild(img);

    figure.appendChild(button);

    galleryGrid.appendChild(figure);

  });

};

/* ---------- INITIAL LOAD ---------- */

renderGalleryPage(activePage);

/* ---------- PAGE BUTTONS ---------- */

galleryPageButtons.forEach((button) => {

  button.addEventListener("click", () => {

    activePage = Number(button.dataset.page);

    galleryPageButtons.forEach((item) =>
      item.classList.remove("is-active")
    );

    button.classList.add("is-active");

    renderGalleryPage(activePage);

  });

});

/* ---------- OPEN LIGHTBOX ---------- */

galleryGrid.addEventListener("click", (event) => {

  const button = event.target.closest(".gallery-button");

  if (!button) return;

  lightboxImage.src = button.dataset.image;

  lightboxImage.alt = button.dataset.alt;

  lightbox.classList.add("is-open");

  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

});

/* ---------- CLOSE LIGHTBOX ---------- */

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {

    closeLightbox();

  }

});

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    lightbox.classList.contains("is-open")
  ) {

    closeLightbox();

  }

});
