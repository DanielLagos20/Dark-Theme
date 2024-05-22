const d = document;

const $btn = d.querySelector("button");
const $body = d.querySelector("body");
const $titulo = d.querySelector("h1");

document.addEventListener("DOMContentLoaded", () => {
  $btn.addEventListener("click", (e) => {
    if (!$body.classList.contains("modo-oscuro")) {
      $body.classList.add("modo-oscuro");
      $btn.style.backgroundImage = "url('svg/sol.svg')";
      $titulo.textContent = "Dark Theme";
    } else {
      $body.classList.remove("modo-oscuro");
      $btn.style.backgroundImage = "url('svg/luna.svg')";
      $titulo.textContent = "Light Theme";
    }
  });
});
