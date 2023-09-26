"use strict";

const sounds = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

function createSounds() {
  Object.keys(sounds).forEach((sound) => {
    const soundElement = document.createElement("div");
    soundElement.id = sound;
    soundElement.textContent = sound;
    soundElement.className = "sound";
    document.querySelector(".sounds-container").appendChild(soundElement);
    soundElement.addEventListener("click", activateSound);
  });
}

function playSound(letter) {
  const sound = new Audio(`assets/sounds/${sounds[letter]}`);
  sound.play();
}

function addEffect(letter) {
  document.querySelector(`#${letter}`).classList.add("active");
}

function removeEffect(letter) {
  const sound = document.querySelector(`#${letter}`);
  const removeActive = () => sound.classList.remove("active");
  sound.addEventListener("transitionend", removeActive);
}

function activateSound(e) {
  let letter = e.type === "keyup" ? e.key.toUpperCase() : e.target.id;
  const permittedLetter = sounds.hasOwnProperty(letter);
  if (permittedLetter) {
    playSound(letter);
    addEffect(letter);
    removeEffect(letter);
  }
}

createSounds();

document.querySelector("body").addEventListener("keyup", activateSound);
