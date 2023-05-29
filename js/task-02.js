const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobieram listę ul.ingredients
const ingredientsList = document.querySelector(".ingredients");

// Iteruję przez każdy element tablicy ingredients
ingredients.forEach((ingredient) => {
  // Tworzę nowy element <li>
  const listItem = document.createElement("li");

  // Dodaję zawartość tekstową (nazwę składnika) do elementu <li>
  listItem.textContent = ingredient;

  // Dodaję klasę 'item' do elementu <li>
  listItem.classList.add("item");

  // Dodaję element <li> do listy ul#ingredients
  ingredientsList.appendChild(listItem);
});
