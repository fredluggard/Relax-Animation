const container = document.getElementById("container");
const text = document.getElementById("text");

const Time = 7500;
const breathingTime = (Time / 5) * 2;
const holdTime = Time / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breathingTime);
}

setInterval(breathAnimation, Time);
