const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

function nextPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
}

function reveal(el, num) {
  el.innerHTML = `<img src="images/photo${num}.jpg" style="width:100%;border-radius:12px;">`;
}

function restart() {
  music.currentTime = 0;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page1").classList.add("active");
}
