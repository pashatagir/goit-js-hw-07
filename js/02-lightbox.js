import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");

const createGalleryMarkup = createCardsImageMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", createGalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createCardsImageMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>
    `;
    })
    .join("");
}
