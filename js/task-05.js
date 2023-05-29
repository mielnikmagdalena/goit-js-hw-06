//Pobieram referencję do pola input o id "name-input" za pomocą metody querySelector() i przypisuje go do zmiennej nameInput.
const nameInput = document.querySelector("#name-input");
//Pobieram referencję do elementu span o id "name-output" za pomocą metody querySelector() i przypisuje go do zmiennej nameOutput.
const nameOutput = document.querySelector("#name-output");
//Dodaję nasłuchiwanie zdarzenia "input" do pola input nameInput za pomocą metody addEventListener().
//Wewnątrz funkcji obsługi zdarzenia, sprawdzam, czy wartość pola input jest pusta (nameInput.value === "").
//Jeśli pole input jest puste, ustawiam tekst w elemencie span nameOutput na "Anonymous" za pomocą właściwości textContent.
//Jeśli pole input zawiera tekst, ustawia tekst w elemencie span nameOutput na aktualną wartość pola input (nameInput.value).
nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
