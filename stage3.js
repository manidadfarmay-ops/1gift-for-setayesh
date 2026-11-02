const symbols = document.querySelectorAll(".symbol");
const lock = document.getElementById("lock");

const correctSequence = ["flower", "star", "heart"];
let selectedSequence = [];

symbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    selectedSequence.push(symbol.dataset.symbol);

    if (selectedSequence.length === 3) {
      const correct =
        selectedSequence.every(
          (value, index) => value === correctSequence[index]
        );

      if (correct) {
        lock.classList.add("unlocked");

        setTimeout(() => {
          alert("قفل باز شد 🤍");
        }, 500);
      } else {
        lock.classList.add("shake");

        setTimeout(() => {
          lock.classList.remove("shake");
          selectedSequence = [];
        }, 500);
      }
    }
  });
});
