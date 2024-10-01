function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#recepie", {
    strings: "Esta es la receta",
    autoStart: true,
    delay: 1,
  });
}
let recepieFormElement = document.querySelector("#recepie-form");
recepieFormElement.addEventListener("submit", generatePoem);
