import {
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonClearingSound,
  lightTheme,
  darkTheme,
  forestVol,
  rainVol,
  coffeeVol,
  clearingVol,
} from "./elements.js";

export function Events({ controls, sounds }) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    controls.countDown();
    sounds.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.pause();
    controls.reset();
    sounds.pressButton();
  });

  buttonMoreTime.addEventListener("click", () => {
    controls.moreTime();
    sounds.pressButton();
  });

  buttonLessTime.addEventListener("click", () => {
    controls.lessTime();
    sounds.pressButton();
  });

  buttonForestSound.addEventListener("click", () => {
    buttonForestSound.classList.toggle("forest");
    buttonRainSound.classList.remove("rain");
    buttonCoffeeShopSound.classList.remove("coffee");
    buttonClearingSound.classList.remove("clearing");

    sounds.pauseAll();
    if (buttonForestSound.classList.contains("forest")) {
      sounds.forestSound.play();
    }
  });

  buttonRainSound.addEventListener("click", () => {
    buttonRainSound.classList.toggle("rain");
    buttonForestSound.classList.remove("forest");
    buttonCoffeeShopSound.classList.remove("coffee");
    buttonClearingSound.classList.remove("clearing");

    sounds.pauseAll();
    if (buttonRainSound.classList.contains("rain")) {
      sounds.rainSound.play();
    }
  });

  buttonCoffeeShopSound.addEventListener("click", () => {
    buttonCoffeeShopSound.classList.toggle("coffee");
    buttonForestSound.classList.remove("forest");
    buttonRainSound.classList.remove("rain");
    buttonClearingSound.classList.remove("clearing");

    sounds.pauseAll();
    if (buttonCoffeeShopSound.classList.contains("coffee")) {
      sounds.coffeeShopSound.play();
    }
  });

  buttonClearingSound.addEventListener("click", () => {
    buttonClearingSound.classList.toggle("clearing");
    buttonForestSound.classList.remove("forest");
    buttonRainSound.classList.remove("rain");
    buttonCoffeeShopSound.classList.remove("coffee");

    sounds.pauseAll();
    if (buttonClearingSound.classList.contains("clearing")) {
      sounds.clearingSound.play();
    }
  });

  lightTheme.addEventListener("click", () => {
    lightTheme.classList.add("hide");
    darkTheme.classList.remove("hide");
    controls.changeTheme();
  });

  darkTheme.addEventListener("click", () => {
    lightTheme.classList.remove("hide");
    darkTheme.classList.add("hide");
    controls.changeTheme();
  });

  forestVol.addEventListener("input", () => {
    sounds.volumeControl(sounds.forestSound, forestVol);
  });

  rainVol.addEventListener("input", () => {
    sounds.volumeControl(sounds.rainSound, rainVol);
  });

  coffeeVol.addEventListener("input", () => {
    sounds.volumeControl(sounds.coffeeShopSound, coffeeVol);
  });

  clearingVol.addEventListener("input", () => {
    sounds.volumeControl(sounds.clearingSound, clearingVol);
  });

  return {
    buttonPlay,
    buttonStop,
    buttonMoreTime,
    buttonLessTime,
    buttonForestSound,
    buttonRainSound,
    buttonCoffeeShopSound,
    buttonClearingSound,
    lightTheme,
    darkTheme,
    forestVol,
    rainVol,
    coffeeVol,
    clearingVol,
  };
}
