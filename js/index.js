import { Sounds } from "./sounds.js";
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  body,
  timerSpan,
  controlButtons,
  soundsButtons,
} from "./elements.js";
import { Controls } from "./controls.js";
import { Events } from "./events.js";

const controls = Controls({
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  body,
  timerSpan,
  controlButtons,
  soundsButtons,
});
const sounds = Sounds();

Events({ controls, sounds });
