import { galleryItems } from './gallery-items.js';

const ul = document.getElementsByClassName("gallery");
let s = "";

for(let i = 0; i<galleryItems.length; i++){
    s += `<div class="grid-item"><img src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" id="img${i}"></div>\n`;
}
ul[0].innerHTML = s;
