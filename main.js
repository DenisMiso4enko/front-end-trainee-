import "./style.scss";
import { updateTimer } from "./js/timer";
import { handleSubmitForm } from "./js/formSubmit";
import { changeCountText } from "./js/changeCountText";

// start timer
updateTimer();
setInterval(updateTimer, 1000);

// change count text
changeCountText();
window.addEventListener("resize", () => {
  changeCountText();
});

// send form
const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmitForm);

// accordion
const titles = document.querySelectorAll(".accordion__head");
const contents = document.querySelectorAll(".accordion__content");

titles.forEach((item) =>
  item.addEventListener("click", () => {
    const activeTab = document.querySelector("#" + item.dataset.tab);
    if (activeTab.classList.contains("active")) {
      activeTab.classList.remove("active");
      item.classList.remove("active");
    } else {
      contents.forEach((el) => el.classList.remove("active"));

      titles.forEach((title) => title.classList.remove("active"));

      item.classList.add("active");
      activeTab.classList.add("active");
    }
  })
);

document.querySelector('[data-tab="tab-1"]').classList.add("active");
document.querySelector("#tab-1").classList.add("active");

// observer link
const btnEvent = document.querySelector(".btn-event");
const section = document.querySelector(".main");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      btnEvent.classList.remove("active");
    } else {
      btnEvent.classList.add("active");
    }
  });
});

btnEvent.addEventListener("click", () => {
  if (!btnEvent.classList.contains("active")) {
    btnEvent.classList.add("active");
  }
});
observer.observe(section);
