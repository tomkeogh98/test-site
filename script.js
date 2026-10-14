const clock = document.getElementById("clock");
const tick = () => { clock.textContent = new Date().toLocaleTimeString(); };
tick();
setInterval(tick, 1000);
