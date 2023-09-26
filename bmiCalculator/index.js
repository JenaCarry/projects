const form = document.querySelector("form");
const name = document.querySelector("#name");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

function calculateBMI() {
  const nameValue = name.value.trim();
  const heightValue = parseFloat(height.value);
  const weightValue = parseFloat(weight.value);

  if (nameValue.length > 0 && heightValue > 0 && weightValue > 0) {
    const total = weightValue / Math.pow(heightValue, 2);
    let msg = "";

    if (total < 18.5) {
      msg = "Mild Thinness";
    } else if (total < 24.9) {
      msg = "Normal";
    } else if (total < 29.9) {
      msg = "Overweight";
    } else if (total < 34.9) {
      msg = "Obese Class I";
    } else if (total < 39.0) {
      msg = "Obese Class II";
    } else {
      msg = "Obese Class III";
    }

    result.innerText = `${nameValue}, your BMI is ${total.toFixed(
      1
    )} - ${msg}.`;
  } else {
    result.innerText = `Fill in all fields`;
  }
}

form.addEventListener("submit", (e) => e.preventDefault());

calculate.addEventListener("click", calculateBMI);
