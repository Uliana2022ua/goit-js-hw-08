// Add imports above this line

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const imgs = galleryItems
.map((img) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}" >
  <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"/>
</a>
</div>`;
  })
  .join(" ");

  const  gallery  =  document. querySelector('.gallery');
gallery. innerHTML  =  imgs;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDeley: 250,
});
