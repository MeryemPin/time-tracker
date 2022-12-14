// Variables
let ms = 00;
let sec = 0;
let min = 0;
let hours = 0;
let interval;

// selectors
let appendMs = document.getElementById("m-seconds");
let appendSec = document.getElementById("seconds");
let appendMin = document.getElementById("minutes");
let appendHours = document.getElementById("hours");
// btns
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// start timer function
const startTimer = () => {
  ms++;

  // msec
  if (ms <= 9) {
    appendMs.innerHTML = "0" + ms;
  }

  if (ms > 9) {
    appendMs.innerHTML = ms;
  }

  // sec
  if (ms > 99) {
    sec++;

    appendSec.innerHTML = "0" + sec;
    ms = 00;
    appendMs.innerHTML = ms;
  }

  if (sec > 9) {
    appendSec.innerHTML = sec;
  }
  // min
  if (sec > 59) {
    min++;

    appendMin.innerHTML = "0" + min;
    sec = 0;
    appendSec.innerHTML = "0" + sec;
  }

  if (min > 9) {
    appendMin.innerHTML = min;
  }
  // hours
  if (min > 59) {
    hours++;

    appendHours.innerHTML = "0" + hours;
    min = "00";
    appendMin.innerHTML = min;
  }
};

// append function to btns
startBtn.onclick = () => {
  interval = setInterval(startTimer, 10);
};

stopBtn.onclick = () => {
  clearInterval(interval);
};

resetBtn.onclick = () => {
  clearInterval(interval);
  ms = "00";
  sec = "00";
  min = "00";
  hours = "00";

  appendMs.innerHTML = ms;
  appendSec.innerHTML = sec;
  appendMin.innerHTML = min;
  appendHours.innerHTML = hours;
};
