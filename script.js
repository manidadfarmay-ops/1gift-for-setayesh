const openBtn = document.getElementById("openBtn");
const openText = document.getElementById("openText");
const page = document.querySelector(".page");

function openEnvelope() {
  if (page.classList.contains("opening")) return;

  page.classList.add("opening");
  openText.textContent = "✨ آماده شد";

  setTimeout(() => {
    console.log("Stage 1 complete");
  }, 900);
}

openBtn.addEventListener("click", openEnvelope);
openText.addEventListener("click", openEnvelope);
