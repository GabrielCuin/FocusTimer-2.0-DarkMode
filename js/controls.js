import { Sounds } from "./sounds.js";

export function Controls({
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  body,
  timerSpan,
  controlButtons,
  soundsButtons,
}) {
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);
  let timerTimeOut;
  let currentTime;

  function updateDisplay(newMinutes, newSeconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    newSeconds = newSeconds === undefined ? seconds : newSeconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(currentTime, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);

      if (minutes <= 0 && seconds <= 0) {
        pause();
        updateDisplay();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  function moreTime() {
    let newTime = Number(minutesDisplay.textContent) + 5;
    let seconds = Number(secondsDisplay.textContent);

    currentTime = newTime;
    minutes = newTime;

    updateDisplay(newTime, seconds);
  }

  function lessTime() {
    if (Number(minutesDisplay.textContent) <= 5) {
      return;
    }
    let newTime = Number(minutesDisplay.textContent) - 5;
    let seconds = Number(secondsDisplay.textContent);

    currentTime = newTime;
    minutes = newTime;

    updateDisplay(newTime, seconds);
  }

  function play() {
    buttonPlay.classList.add("hide");
  }

  function pause() {
    buttonPlay.classList.remove("hide");
  }

  function changeTheme() {
    body.classList.toggle('dark')
    timerSpan.classList.toggle('dark')
    controlButtons.classList.toggle('dark')
    soundsButtons.classList.toggle('dark')
  }

  return {
    countDown,
    reset,
    moreTime,
    lessTime,
    play,
    pause,
    changeTheme,
  };
}
