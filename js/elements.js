const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonMoreTime = document.querySelector(".more-time");
const buttonLessTime = document.querySelector(".less-time");

const buttonForestSound = document.querySelector("#forest");
const buttonRainSound = document.querySelector("#rain");
const buttonCoffeeShopSound = document.querySelector("#coffee");
const buttonClearingSound = document.querySelector("#clearing");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const forestVol = document.querySelector('#volume-forest');
const rainVol = document.querySelector('#volume-rain');
const coffeeVol = document.querySelector('#volume-coffeeShop');
const clearingVol = document.querySelector('#volume-clearing');

const lightTheme = document.querySelector('#light-theme')
const darkTheme = document.querySelector('#dark-theme')
const body = document.querySelector('body')
const timerSpan = document.querySelector('#timer')
const controlButtons = document.querySelector('#controls')
const soundsButtons = document.querySelector('#sounds-block')

export {
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonClearingSound,
  minutesDisplay,
  secondsDisplay,
  forestVol,
  rainVol,
  coffeeVol,
  clearingVol,
  lightTheme,
  darkTheme,
  body,
  timerSpan,
  controlButtons,
  soundsButtons,
};
