const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobieram listę ul.ingredients
const ingredientsList = document.querySelector("#ingredients");
//Tworzę zmienną z pustą tablicą, do której będę 'pushować' elementy 'li'
const liElements = [];
// Iteruję przez każdy element tablicy ingredients
ingredients.forEach((ingredient) => {
  // Tworzę nowy element <li>
  const li = document.createElement("li");

  // Dodaję zawartość tekstową (nazwę składnika) do elementu <li>
  li.textContent = ingredient;

  // Dodaję klasę 'item' do elementu <li>
  li.classList.add("item");
  // 'Pushuję' elementy 'li' do zmiennej liElements, która jest pustą tablicą;
  liElements.push(li);
});
// Dodaję element <li> do listy ul#ingredients za pomocą metody .append
ingredientsList.append(...liElements);
