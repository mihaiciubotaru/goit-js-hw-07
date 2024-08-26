import { galleryItems } from './gallery-items.js';

const ul = document.getElementsByClassName("gallery");
let s = "";

for(let i = 0; i<galleryItems.length; i++){
    console.log(galleryItems[i].preview);
    s += `<div class="grid-item"><img src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" id="img${i}"></div>\n`;
}
ul[0].innerHTML = s;

img0.addEventListener("click", (event) => showModalImg(0));
img1.addEventListener("click", (event) => showModalImg(1));
img2.addEventListener("click", (event) => showModalImg(2));
img3.addEventListener("click", (event) => showModalImg(3));
img4.addEventListener("click", (event) => showModalImg(4));
img5.addEventListener("click", (event) => showModalImg(5));
img6.addEventListener("click", (event) => showModalImg(6));
img7.addEventListener("click", (event) => showModalImg(7));
img8.addEventListener("click", (event) => showModalImg(8));

function showModalImg(index){
    const image = basicLightbox.create(
        `<img width="1400" height="900" src="${galleryItems[index].original}">`,
        { closable: true }
      );
    image.show();
}