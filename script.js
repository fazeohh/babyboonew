document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const galleryGrid = document.getElementById("gallery-grid");
const galleryToolbar = document.getElementById("gallery-toolbar");

const galleryItems = [
  { src: "assets/collection-1.jpeg", alt: "wrap towel and mittens set", shape: "tall" },
  { src: "assets/collection-2.jpeg", alt: "Side opening kettuduppu and bloomers set" },
  { src: "assets/collection-3.jpeg", alt: "Crochet baby set in green" },
  { src: "assets/collection-4.jpeg", alt: "Baby girl dress set in white" },
  { src: "assets/collection-5.jpeg", alt: "Baptism set for baby girl" },
  { src: "assets/gallery-6.jpeg", alt: "Back open kettuduppu", shape: "wide" },
  { src: "assets/gallery-7.jpeg", alt: "Baby Boo tie-strap dress with tiny red flower details" },
  { src: "assets/gallery-8.jpeg", alt: "Baby Boo floral embroidered towel" },
  { src: "assets/gallery-9.jpeg", alt: "Baby Boo dolphin embroidered towel" },
  { src: "assets/gallery-10.jpeg", alt: "Baby Boo wrap towel with rose embroidery" },
  { src: "assets/gallery-11.jpeg", alt: "Baby Boo multi-design embroidered baby kettuduppu" },
  { src: "assets/gallery-12.jpeg", alt: "Baby Boo pink flower embroidered towel" },
  { src: "assets/gallery-13.jpeg", alt: "Pintuck back open kettuduppu" },
  { src: "assets/gallery-14.jpeg", alt: "Baby Boo floral lace baby set with mittens and bloomers" },
  { src: "assets/gallery-15.jpeg", alt: "Baby Boo embroidered mitten collection" },
  { src: "assets/gallery-16.jpeg", alt: " White frock set" },
  { src: "assets/gallery-17.jpeg", alt: "Shoulder tie frock with bell embroidery" },
  { src: "assets/gallery-18.jpeg", alt: "Printed side opening kettuduppu" },
  { src: "assets/gallery-19.jpeg", alt: "Blue muslin frock" },
  { src: "assets/gallery-20.jpeg", alt: "Baby Boo bee print dress" },
  { src: "assets/gallery-21.jpeg", alt: "Baby Boo elephant print dress" },
  { src: "assets/gallery-22.jpeg", alt: "Noolukettu frock with customised name" },
  { src: "assets/gallery-23.jpeg", alt: "Baby Boo pink bow lace baby set", shape: "tall" },
  { src: "assets/gallery-24.jpeg", alt: "Baby Boo lavender embroidered baby romper" },
  { src: "assets/gallery-25.jpeg", alt: "Multi-design embroidered baby kettuduppu" },
  { src: "assets/gallery-26.jpeg", alt: "Baby Boo custom named babywear set" },
  { src: "assets/gallery-27.jpeg", alt: "Multi-design embroidered baby kettuduppu" },
  { src: "assets/gallery-28.jpeg", alt: "Side opening kettupuppu with pockets" },
  { src: "assets/gallery-29.jpeg", alt: "Baby Boo personalized white cot sheet with blue embroidery", shape: "wide" },
  { src: "assets/gallery-30.jpeg", alt: "Baby Boo yellow floral cot sheet set" },
  { src: "assets/gallery-31.jpeg", alt: "Baby Boo faith-inspired embroidered babywear" },
  { src: "assets/gallery-32.jpeg", alt: "Noolukettu dress set with headband and bloomers" },
  { src: "assets/gallery-33.jpeg", alt: "Shoulder tie frock with cot sheet" },
  { src: "assets/gallery-34.jpeg", alt: "Side Open Kettuduppu with hand embroidery" },
  { src: "assets/gallery-36.jpeg", alt: "Combo set(kettuduppu,wrap towel,bath towel" },
  { src: "assets/gallery-37.jpeg", alt: "Baby Boo frilled Bloomers" },
  { src: "assets/gallery-38.jpeg", alt: "Baby Boo lotus embroidered noolukettu bloomer set" },
  { src: "assets/gallery-39.jpeg", alt: "Baby Boo floral baby set with mittens and bloomers" },
  { src: "assets/gallery-40.jpeg", alt: "Baby Boo floral embroidered set with mittens and bloomers" },
  { src: "assets/gallery-41.jpeg", alt: "Baby Boo floral embroidered set with mittens and bloomers", shape: "wide" },
  { src: "assets/gallery-42.jpeg", alt: "Baby Boo teddy embroidered cot sheet set", shape: "wide" },
  { src: "assets/gallery-43.jpeg", alt: "Baby Boo embroidered front open dress" },
  { src: "assets/gallery-44.jpeg", alt: "Baby Boo floral embroidered baby romper" },
  { src: "assets/gallery-45.jpeg", alt: "Baby Boo yellow flower front-open baby top" },
  { src: "assets/gallery-46.jpeg", alt: "Baby Boo personalized baptism set" },
  { src: "assets/gallery-47.jpeg", alt: "Baby Boo personalized baptism keepsake set", shape: "wide" }
];

const itemsPerPage = 12;
const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
let activePage = 1;

const getGalleryTitle = (item) => item.title || item.alt.replace(/^Baby Boo\s+/i, "");

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
      const title = getGalleryTitle(item);

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
            <span class="gallery-caption">${title}</span>
          </button>
        </figure>
      `;
    })
    .join("");
};

const renderGalleryButtons = () => {
