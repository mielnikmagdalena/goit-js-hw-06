//Pobieram referencję do pola input o id "validation-input" za pomocą metody querySelector() i przypisuje go do zmiennej validationInput.
const validationInput = document.querySelector("#validation-input");
//Dodaję nasłuchiwanie zdarzenia "blur" do pola input validationInput za pomocą metody addEventListener().
//Wewnątrz funkcji obsługi zdarzenia, sprawdzam, czy wartość pola input jest równe długości 6 symbolom (validationInput.value.length === 6).
//Jeśli tak, dodaję klasę "valid", w przeciwnym razie dodaję klasę "invalid".
//
validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
