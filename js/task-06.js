//Pobieram referencję do pola input o id "validation-input" za pomocą metody querySelector() i przypisuje go do zmiennej validationInput.
const validationInput = document.querySelector("#validation-input");
//Ponieważ do pobrania wartości właściwości data-atrybutu używana jest właściwość dataset, po której znajduje się nazwa atrybutu, wykorzystuję ją tutaj, aby pobrać wartość liczbową i przypisuję do zmiennej 'dataLength'
const dataLength = validationInput.dataset.length;
//Dodaję nasłuchiwanie zdarzenia "blur" do pola input validationInput za pomocą metody addEventListener().
//Sprawdzam warunek, czy długość wartości wprowadzonej przez użytkownika (validationInput.value.length) jest równa wartości dataLength
// Metoda : parseInt(dataLength) służy do konwersji wartości dataLength na liczbę, ponieważ atrybuty data są zawsze przechowywane jako ciągi znaków (stringi).
// Jeśli warunek jest spełniony, czyli długość wprowadzonej wartości jest taka sama jak oczekiwana długość, wykonujemy instrukcje w bloku if czyli dodaję klasę "valid", w przeciwnym razie dodaję klasę "invalid".
validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === parseInt(dataLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
