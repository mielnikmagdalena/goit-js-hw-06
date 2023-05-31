// Pobieram listę kategorii
const categoriesList = document.querySelector("#categories");

// Pobieram elementy li.item (kategorie)
const categories = categoriesList.querySelectorAll("li.item");

// Liczę liczby kategorii
const numberOfCategories = categories.length;

// Wypisuję liczby kategorii w konsoli
console.log("Number of categories: " + numberOfCategories);

// Iteruję przez każdą kategorię
categories.forEach((category) => {
  // Pobieram tekst nagłówka (tag <h2>) dla każdej kategorii
  const header = category.querySelector("h2").textContent;

  // Pobieram elementy <li> w obrębie danej kategorii
  const elements = category.querySelectorAll("li");

  // Liczę liczbę elementów w danej kategorii
  const numberOfElements = elements.length;
  // Wypisuję informacje o kategorii i liczbie elementów w konsoli
  console.log("Category: " + header);
  console.log("Elements: " + numberOfElements);
});
