import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");

const createGalleryMarkup = createCardsImageMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryContainerEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="855">`,
    {
      onShow: (instance) => {
        galleryContainerEl.addEventListener("keydown", onGalleryClickEsc);
      },
      onClose: (instance) => {
        galleryContainerEl.removeEventListener("keydown", onGalleryClickEsc);
      },
    }
  );

  instance.show();

  function onGalleryClickEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

function createCardsImageMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </div>
    `;
    })
    .join("");
}
