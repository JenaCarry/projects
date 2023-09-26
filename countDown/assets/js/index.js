const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let time = 864000;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countdown() {
  const day = Math.floor(time / 86400);
  const hour = Math.floor(time / 3600) % 24;
  const minute = Math.floor(time / 60) % 60;
  const second = time % 60;

  days.innerHTML = formatTime(day);
  hours.innerHTML = formatTime(hour);
  minutes.innerHTML = formatTime(minute);
  seconds.innerHTML = formatTime(second);

  time--;
}

setInterval(countdown, 1000);
