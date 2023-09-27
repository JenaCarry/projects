const trafficLight = document.querySelector("#trafficLight");
const buttons = document.querySelectorAll(".buttons-container button");
let colorIndex = 0;
let timeout = null;

const statusTrafficLight = (e) => {
  const selected = e.target.id;
  clearInterval(timeout);
  turnOn[selected]();

  buttons.forEach((button) => button.classList.remove("active"));
  e.target.classList.add("active");
};

const changeColorAuto = () => {
  const colors = ["green", "yellow", "red"];
  turnOn[colors[colorIndex]]();
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
};

const turnOn = {
  red: () => (trafficLight.src = "assets/images/red.png"),
  yellow: () => (trafficLight.src = "assets/images/yellow.png"),
  green: () => (trafficLight.src = "assets/images/green.png"),
  auto: () => (timeout = setInterval(changeColorAuto, 1000)),
};

buttons.forEach((button) =>
  button.addEventListener("click", statusTrafficLight)
);
