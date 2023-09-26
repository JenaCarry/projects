const lightBulb = document.querySelector("#lightBulb");
const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");

function isLampBroken() {
  return lightBulb.src.includes("broken");
}

function getLightBulbState(imageSrc) {
  if (imageSrc.includes("turnOn")) {
    return "turnOn";
  } else if (imageSrc.includes("turnOff")) {
    return "turnOff";
  }
}

function updateLightBulbState() {
  const imageSrc = lightBulb.src;
  const bulbState = getLightBulbState(imageSrc);

  turnOff.classList.remove("active");
  turnOn.classList.remove("active");

  if (bulbState === "turnOn") {
    turnOn.classList.add("active");
  } else if (bulbState === "turnOff") {
    turnOff.classList.add("active");
  }
}

function setLightBulbState(imageSrc) {
  if (!isLampBroken()) {
    lightBulb.src = `assets/images/${imageSrc}.jpg`;
    updateLightBulbState();
  }
}

function brokenLightBulb() {
  setLightBulbState("broken");
}

function turnOffLightBulb() {
  setLightBulbState("turnOff");
}

function turnOnLightBulb() {
  setLightBulbState("turnOn");
}

lightBulb.addEventListener("dblclick", brokenLightBulb);
lightBulb.addEventListener("mouseover", turnOnLightBulb);
lightBulb.addEventListener("mouseout", turnOffLightBulb);
turnOff.addEventListener("click", turnOffLightBulb);
turnOn.addEventListener("click", turnOnLightBulb);
