import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

let galleryContainer = document.querySelector("ul.gallery")

let createGalleryItem = (galleryItems) => {
    return galleryItems.map((galleryItem) => {
        return `
                <a class="gallery__link" href="${galleryItem.original}">
                    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
                </a>`
    }).join("");
}

let photoGallery = createGalleryItem(galleryItems)
galleryContainer.insertAdjacentHTML("beforeend", photoGallery)

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250})
galleryHandler.on("show.simpleLightbox");