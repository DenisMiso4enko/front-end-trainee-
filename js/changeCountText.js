const daysText = document.querySelector("#daysText");
const hoursText = document.querySelector("#hoursText");
const minutesText = document.querySelector("#minutesText");
const secondsText = document.querySelector("#secondsText");


export function changeCountText() {
    const w = window.innerWidth;
    if (w < 1024) {
      daysText.innerText = "DD";
      hoursText.innerText = "HH";
      minutesText.innerText = "MM";
      secondsText.innerText = "SS";
    } else {
      daysText.innerText = "Days";
      hoursText.innerText = "Hours";
      minutesText.innerText = "Minutes";
      secondsText.innerText = "Seconds";
    }
  }
  changeCountText();
  window.addEventListener("resize", () => {
    changeCountText();
  });
  