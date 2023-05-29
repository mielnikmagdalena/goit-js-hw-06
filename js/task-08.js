//Pobieram formularz logowania za pomocą document.querySelector.
const loginForm = document.querySelector(".login-form");
//Dodaję nasłuchiwanie zdarzenia submit do formularza.
loginForm.addEventListener("submit", handleSubmit);
//Wewnątrz funkcji obsługującej zdarzenie wywołuję metodę preventDefault() na obiekcie zdarzenia, aby zapobiec domyślnej akcji przesyłania formularza (czyli odświeżenia strony).
function handleSubmit(event) {
  event.preventDefault();
  //Pobieram elementy input dla pól email i password za pomocą event.target.elements.
  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;
  //Pobieram wartości wprowadzone przez użytkownika z tych pól za pomocą value.
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  //Sprawdzam, czy oba pola zostały wypełnione. Jeśli nie, wyświetlam alert z odpowiednim komunikatem.
  //Jeśli oba pola są wypełnione, tworzę obiekt formData zawierający nazwy pól jako klucze i ich wartości jako wartości właściwości.
  if (emailValue === "" || passwordValue === "") {
    alert("Please fill in all fields");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    //Wyświetlam obiekt formData w konsoli.
    //Resetuję formularz za pomocą metody reset(), która wyczyści wartości pól input.
    console.log(formData);
    loginForm.reset();
  }
}
