const clock = document.getElementById("clock");
const tick = () => { clock.textContent = new Date().toLocaleTimeString(); };
tick();
setInterval(tick, 1000);

const dog = document.querySelector(".dog");
const jump = () => {
  if (dog.classList.contains("jumping")) return;
  dog.classList.add("jumping");
};
dog.addEventListener("animationend", () => { dog.classList.remove("jumping"); });
dog.addEventListener("click", jump);
dog.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    jump();
  }
});
