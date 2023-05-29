function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Pobieram elementy HTML, takie jak <div class="widget">, <span class="color"> i <button class="change-color">, za pomocą metody document.querySelector i przypisuję je do odpowiednich zmiennych.
const widget = document.querySelector(".widget");
const colorSpan = widget.querySelector(".color");
const changeColorButton = widget.querySelector(".change-color");
//Dodaję nasłuchiwanie zdarzenia click do przycisku change-color.
//Wewnątrz funkcji obsługującej zdarzenie:
//Generuję losowy kolor, wykorzystując funkcję getRandomHexColor.
//Ustawiam kolor tła elementu <body> na wygenerowany kolor za pomocą document.body.style.backgroundColor.
//Ustawiam tekst w elemencie <span class="color"> na wygenerowany kolor za pomocą colorSpan.textContent.
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
