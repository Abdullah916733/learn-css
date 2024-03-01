const watch = (function () {
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const reset = document.getElementById("reset");
  const stop = document.getElementById("stop");
  let time = "00:00";
  let minutes = 0;
  let seconds = 0;
  let t;

  timer.textContent = time;

  function buildTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        seconds = 0;
        minutes = 0;
      }
    }
    timer.textContent =
      (minutes < 10 ? "0" + minutes.toString() : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds.toString() : seconds);
  }

  function startTimer() {
    start.addEventListener("click", function () {
      clearTimeout(t);
      t = setInterval(buildTimer, 1000);
    });
  }

  function resetTimer() {
    reset.addEventListener("click", function () {
      clearTimeout(t);
      seconds = 0;
      minutes = 0;
      timer.textContent = time;
    });
  }

  function stopTimer() {
    stop.addEventListener("click", function () {
      clearTimeout(t);
    });
  }

  return {
    start: startTimer(),
    reset: resetTimer(),
    stop: stopTimer(),
  };
})();
