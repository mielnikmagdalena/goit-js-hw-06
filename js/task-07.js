//Pobieram element suwaka input#font-size-control za pomocą document.querySelector.
const fontSizeControl = document.querySelector("#font-size-control");
//Pobieram element tekstu span#text za pomocą document.querySelector.
const textElement = document.querySelector("#text");
//Dodaję nasłuchiwanie zdarzenia input do suwaka.
//Wewnątrz funkcji obsługującej zdarzenie aktualizuję rozmiar czcionki elementu span#text poprzez ustawienie wartości fontSize na obliczony rozmiar odczytany z suwaka.
fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
});
