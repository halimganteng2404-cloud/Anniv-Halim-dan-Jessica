document.addEventListener("click", function(e) {
  let heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.className = "heart"; // add CSS class
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

function createSakura() {
  const sakura = document.createElement("div");
  sakura.classList.add("sakura");

  // random horizontal position
  sakura.style.left = Math.random() * window.innerWidth + "px";

  // random animation duration
  sakura.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.getElementById("sakura-container").appendChild(sakura);

  // remove after animation
  setTimeout(() => {
    sakura.remove();
  }, 10000);
}

// create petals every 300ms
setInterval(createSakura, 300);
