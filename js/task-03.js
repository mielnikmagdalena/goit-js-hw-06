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
const galleryList = document.querySelector(".gallery");

// Tworzę pustą zmienną, do której będziemy dodawać elementy galerii
let galleryHTML = "";

// Iteruję przez każdy obiekt w tablicy images
images.forEach((image) => {
  // Tworzę znacznik <img> z wykorzystaniem template stringa i danych z obiektu
  const imageHTML = `<li><img src="${image.url}" alt="${image.alt}"></li>`;

  // Dodaję utworzony znacznik <img> do galerii
  galleryHTML += imageHTML;
});

// Dodaję wszystkie elementy galerii do listy ul.gallery za pomocą insertAdjacentHTML()
galleryList.insertAdjacentHTML("beforeend", galleryHTML);
