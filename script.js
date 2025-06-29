let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  return `${hrs.toString().padStart(2, '0')}:${mins
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startStop() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  isRunning = false;
  laps.innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = timeToString(elapsedTime);
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    laps.appendChild(li);
  }
}
