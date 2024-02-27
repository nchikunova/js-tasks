// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const markup = arr => {
  const markup = arr
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
  galleryList.innerHTML = markup;
};

markup(galleryItems);

new SimpleLightbox('.gallery a', {
  enableKeyboard: true,
  captionsData: 'alt',
  captionDelay: 500,
  close: true,
  docClose: true,
});
