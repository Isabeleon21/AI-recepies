function displayRecepie(response) {
  console.log("Recepie generated");
  new Typewriter("#recepie", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecepie(event) {
  event.preventDefault();
  let ingredientInput = document.querySelector("#ingredient-input");
  let key = `01btdd9b12oabf9004aa243803e97c7e`;
  let context = `You are a chef and you need to create a recepie from one ingredient. Format the recepie in basic HTML with all ingredients in a list and then bullet poiint step by step instructions. Go directly to the recepie exclude any tags or additons in the beggining `;
  let prompt = `User instruction: Generate a full recepie with list of ingredient including ${ingredientInput.value} and how to prepare it`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let recepieElement = document.querySelector("#recepie");
  recepieElement.classList.remove("hidden");
  recepieElement.innerHTML = "Generating Recepie";

  console.log("api thinking");
  axios.get(apiUrl).then(displayRecepie);
}
let recepieFormElement = document.querySelector("#recepie-form");
recepieFormElement.addEventListener("submit", generateRecepie);
