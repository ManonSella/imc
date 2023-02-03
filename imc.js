let button = document.querySelector("#bmi-calculation");
let inputHeight = document.querySelector("#height");
let inputWeight = document.querySelector("#weight");
let calculationResult = document.querySelector("#bmiNumber");
let resultCategory = document.querySelector("#resultCategory");
let form = document.querySelector("#bmi-form");

function giveResult() {
  const height = inputHeight.value;
  const weight = inputWeight.value;

  const valid = form.checkValidity();

  if (!valid) {
    imcNumber.innerHTML = "Oops";
    resultCategory.innerHTML = "Remplissez correctement les inputs.";
    return;
  }

  let result =
    inputWeight.value / (((inputHeight.value / 100) * inputHeight.value) / 100);
  calculationResult.innerHTML = `${result.toFixed(1)}`;

  if (result <= 18.5) {
    resultCategory.innerHTML = "maigreur";
  } else if (result >= 18.5 && result >= 24.9) {
    resultCategory.innerHTML = "bonne santé";
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
