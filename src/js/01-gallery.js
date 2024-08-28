import { galleryItems } from './gallery-items.js';

const ul = document.getElementsByClassName("gallery");
let s = "";

for(let i = 0; i<galleryItems.length; i++){
    s += `<div class="grid-item"><img src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" id="img${i}"></div>\n`;
}
ul[0].innerHTML = s;

document.addEventListener("click", (event) => showModalImg(event.target.id));

function showModalImg(id){
    if (id.length === 0 ) return;
    
    const image = basicLightbox.create(
        `<img width="1400" height="900" src="${galleryItems[id.substring(3)].original}">`,
        { closable: true }
      );
    image.show();
}