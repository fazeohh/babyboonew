document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const galleryGrid = document.getElementById("gallery-grid");
const galleryToolbar = document.getElementById("gallery-toolbar");

const galleryItems = [
  { src: "assets/collection-1.jpeg", alt: "Baby Boo essentials set with blanket and mittens", shape: "tall" },
  { src: "assets/collection-2.jpeg", alt: "Baby Boo white baby outfits with embroidery" },
  { src: "assets/collection-3.jpeg", alt: "Baby Boo crochet baby set in green" },
  { src: "assets/collection-4.jpeg", alt: "Baby Boo white embroidered dress sets" },
  { src: "assets/collection-5.jpeg", alt: "Baby Boo sleeveless baby outfit with bloomers" },
  { src: "assets/gallery-6.jpeg", alt: "Baby Boo embroidered baby top with lace trim", shape: "wide" },
  { src: "assets/gallery-7.jpeg", alt: "Baby Boo tie-strap dress with tiny red flower details" },
  { src: "assets/gallery-8.jpeg", alt: "Baby Boo floral embroidered towel" },
  { src: "assets/gallery-9.jpeg", alt: "Baby Boo dolphin embroidered towel" },
  { src: "assets/gallery-10.jpeg", alt: "Baby Boo wrap towel with rose embroidery" },
  { src: "assets/gallery-11.jpeg", alt: "Baby Boo multi-design embroidered baby sets" },
  { src: "assets/gallery-12.jpeg", alt: "Baby Boo pink flower embroidered towel" },
  { src: "assets/gallery-13.jpeg", alt: "Baby Boo tiny motif baby vests" },
  { src: "assets/gallery-14.jpeg", alt: "Baby Boo floral lace baby set with mittens" },
  { src: "assets/gallery-15.jpeg", alt: "Baby Boo embroidered mitten collection" },
  { src: "assets/gallery-16.jpeg", alt: "Baby Boo white baby dress trio" },
  { src: "assets/gallery-17.jpeg", alt: "Baby Boo white eyelet dress with bell embroidery" },
  { src: "assets/gallery-18.jpeg", alt: "Baby Boo pastel butterfly printed dress" },
  { src: "assets/gallery-19.jpeg", alt: "Baby Boo blue muslin dress" },
  { src: "assets/gallery-20.jpeg", alt: "Baby Boo bee print dress" },
  { src: "assets/gallery-21.jpeg", alt: "Baby Boo elephant print dress" },
  { src: "assets/gallery-22.jpeg", alt: "Baby Boo gold trimmed baby dress" },
  { src: "assets/gallery-23.jpeg", alt: "Baby Boo pink bow lace baby set", shape: "tall" },
  { src: "assets/gallery-24.jpeg", alt: "Baby Boo lavender embroidered baby romper" },
  { src: "assets/gallery-25.jpeg", alt: "Baby Boo assorted embroidered cloth pieces" },
  { src: "assets/gallery-26.jpeg", alt: "Baby Boo custom named babywear set" },
  { src: "assets/gallery-27.jpeg", alt: "Baby Boo assorted embroidery design collection" },
  { src: "assets/gallery-28.jpeg", alt: "Baby Boo lace edge embroidered baby top" },
  { src: "assets/gallery-29.jpeg", alt: "Baby Boo personalized white set with blue embroidery", shape: "wide" },
  { src: "assets/gallery-30.jpeg", alt: "Baby Boo yellow floral cot set" },
  { src: "assets/gallery-31.jpeg", alt: "Baby Boo faith-inspired embroidered babywear" },
  { src: "assets/gallery-32.jpeg", alt: "Baby Boo dress set with headband and bloomers" },
  { src: "assets/gallery-33.jpeg", alt: "Baby Boo floral vine muslin set" },
  { src: "assets/gallery-34.jpeg", alt: "Baby Boo frilled bloomer collection" },
  { src: "assets/gallery-35.jpeg", alt: "Baby Boo lotus dress with gold border" },
  { src: "assets/gallery-36.jpeg", alt: "Baby Boo pastel floral lace baby set" },
  { src: "assets/gallery-37.jpeg", alt: "Baby Boo cherry motif lace baby set" },
  { src: "assets/gallery-38.jpeg", alt: "Baby Boo rose embroidered layered bloomer set" },
  { src: "assets/gallery-39.jpeg", alt: "Baby Boo yellow floral baby set with mittens" },
  { src: "assets/gallery-40.jpeg", alt: "Baby Boo floral embroidered gift set" },
  { src: "assets/gallery-41.jpeg", alt: "Baby Boo assorted frilled bloomers", shape: "wide" },
  { src: "assets/gallery-42.jpeg", alt: "Baby Boo teddy embroidered cot set", shape: "wide" },
  { src: "assets/gallery-43.jpeg", alt: "Baby Boo embroidered baby shirt design collection" },
  { src: "assets/gallery-44.jpeg", alt: "Baby Boo floral embroidered baby romper" },
  { src: "assets/gallery-45.jpeg", alt: "Baby Boo yellow flower front-open baby top" },
  { src: "assets/gallery-46.jpeg", alt: "Baby Boo personalized baptism set" },
  { src: "assets/gallery-47.jpeg", alt: "Baby Boo personalized baptism keepsake set", shape: "wide" }
];

const itemsPerPage = 12;
const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
let activePage = 1;

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
};

const renderGalleryPage = (page) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = galleryItems.slice(start, end);

  galleryGrid.innerHTML = pageItems
    .map((item) => {
      const figureClass = item.shape ? `gallery-item ${item.shape}` : "gallery-item";

      return `
        <figure class="${figureClass}">
          <button
            class="gallery-button"
            type="button"
            data-image="${item.src}"
            data-alt="${item.alt}"
            aria-label="Open image: ${item.alt}"
          >
            <img src="${item.src}" alt="${item.alt}">
          </button>
        </figure>
      `;
    })
    .join("");
};

const renderGalleryButtons = () => {
  galleryToolbar.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const activeClass = page === activePage ? " is-active" : "";

    return `<button class="gallery-page-button${activeClass}" type="button" data-page="${page}">Page ${page}</button>`;
  }).join("");
};

renderGalleryButtons();
renderGalleryPage(activePage);

galleryToolbar.addEventListener("click", (event) => {
  const button = event.target.closest(".gallery-page-button");

  if (!button) {
    return;
  }

  activePage = Number(button.dataset.page);
  renderGalleryButtons();
  renderGalleryPage(activePage);
});

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".gallery-button");

  if (!button) {
    return;
  }

  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.dataset.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
