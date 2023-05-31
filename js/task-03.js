const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Pobieram listę ul.gallery
//const galleryList = document.querySelector(".gallery");

// Tworzę pustą zmienną, do której będziemy dodawać elementy galerii
//let galleryHTML = "";

// Iteruję przez każdy obiekt w tablicy images
//images.forEach((image) => {
// Tworzę znacznik <img> z wykorzystaniem template stringa i danych z obiektu
// const imageHTML = `<li><img src="${image.url}" alt="${image.alt}"></li>`;

// Dodaję utworzony znacznik <img> do galerii
// galleryHTML += imageHTML;
//});

// Dodaję wszystkie elementy galerii do listy ul.gallery za pomocą insertAdjacentHTML()
//galleryList.insertAdjacentHTML("beforeend", galleryHTML);

// Drugi sposób zrobienia tego zadania za pomocą metod: .map oraz .join

// Pobieram element <ul> galerii
const gallery = document.querySelector(".gallery");

// Tworzę znaczniki <li> z obrazami na podstawie tablicy danych
const galleryItems = images.map((image) => {
  return `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`;
});

// Łączę wszystkie elementy galerii w jednym ciągu HTML
const galleryHTML = galleryItems.join("");

// Dodaję elementy galerii do DOM
gallery.insertAdjacentHTML("beforeend", galleryHTML);

// Tworzę element <style>
const style = document.createElement("style");
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .gallery-item {
    margin: 10px;
  }

  .gallery-item img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;

// Dodaję style do dokumentu
document.head.appendChild(style);
