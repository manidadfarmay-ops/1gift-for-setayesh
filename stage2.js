const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    if (star.dataset.correct === "true") {
      star.classList.add("correct");
    } else {
      star.classList.add("wrong");

      setTimeout(() => {
        star.classList.remove("wrong");
      }, 500);
    }
  });
});
