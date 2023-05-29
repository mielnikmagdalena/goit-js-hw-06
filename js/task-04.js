// Pobieram elementy interfejsu
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector("#value");

// Tworzę zmienną przechowującą aktualną wartość licznika
let counterValue = 0;

// Funkcja do aktualizacji widoku licznika
function updateCounterView() {
  counterValueSpan.textContent = counterValue;
}

// Funkcja do obsługi kliknięcia przycisku zmniejszającego
function decrementCounter() {
  counterValue--;
  updateCounterView();
}

// Funkcja do obsługi kliknięcia przycisku zwiększającego
function incrementCounter() {
  counterValue++;
  updateCounterView();
}

// Dodaję listenery kliknięcia do przycisków
decrementBtn.addEventListener("click", decrementCounter);
incrementBtn.addEventListener("click", incrementCounter);

// Aktualizuję widok na początku
updateCounterView();
