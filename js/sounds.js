export function Sounds() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  
  const forestSound = new Audio(
    "../sounds/forest.wav"
  );
  forestSound.loop = true;

  const rainSound = new Audio(
    "../sounds/rain.wav"
  );
  rainSound.loop = true;

  const coffeeShopSound = new Audio(
    "../sounds/coffee-shop.wav"
  );
  coffeeShopSound.loop = true;

  const clearingSound = new Audio(
    "../sounds/clearing.wav"
  );
  clearingSound.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function pauseAll() {
    forestSound.pause();
    rainSound.pause();
    coffeeShopSound.pause();
    clearingSound.pause();
  }

  function volumeControl(sound, input) {
    sound.volume = input.value;
  }

  return {
    pressButton,
    timeEnd,
    pauseAll,
    volumeControl,
    forestSound,
    rainSound,
    coffeeShopSound,
    clearingSound,
  }
}
