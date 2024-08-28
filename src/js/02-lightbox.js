import { galleryItems } from './gallery-items.js';
// Change code below this line

const li = document.getElementsByClassName("gallery__item");
let s = "";

for(let i = 0; i<galleryItems.length; i++){
    s += `<a class="gallery__link" href="${galleryItems[i].original}">\n`;
    s += `  <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" title="${galleryItems[i].description}" />\n`;
    s += `</a>\n`;
}
li[0].innerHTML = s;

new SimpleLightbox('.gallery__item a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionData: 'alt'
  });
