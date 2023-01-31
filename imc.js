let button = document.querySelector("#calculIMC");
let inputTaille = document.querySelector("#taille");
let inputKilogrammes = document.querySelector("#poids");
let calculationResult = document.querySelector("#imcNumber");
let resultCategory = document.querySelector("#resultCategory");
let form = document.querySelector("#mon-form");

function giveResult() {
  const taille = inputTaille.value;
  const poids = inputKilogrammes.value;

  const valid = form.checkValidity();

  if (!valid) {
    imcNumber.innerHTML = "Oops";
    resultCategory.innerHTML = "Remplissez correctement les inputs.";
    return;
  }

  let result =
    inputKilogrammes.value /
    (((inputTaille.value / 100) * inputTaille.value) / 100);
  calculationResult.innerHTML = `${result.toFixed(1)}`;

  if (result <= 24.9) {
    resultCategory.innerHTML = "maigreur";
  } else if (result >= 25 && result <= 29.9) {
    resultCategory.innerHTML = "surpoids";
  } else if (result >= 30 && result <= 34.9) {
    resultCategory.innerHTML = "obésité modérée";
  } else if (result >= 35 && result <= 39.9) {
    resultCategory.innerHTML = "obésité sévère";
  } else if (result >= 40) {
    resultCategory.innerHTML = "obésité massive";
  }
}

function onSubmit(event) {
  event.preventDefault();
}

button.addEventListener("click", giveResult);
form.addEventListener("submit", onSubmit);
