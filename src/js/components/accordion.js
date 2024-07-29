const accordion = document.querySelectorAll(".question");

if (accordion) {
  accordion.forEach((accordion) => {
    const btn = accordion.querySelector(".question__btn");
    const text = accordion.querySelector(".question__text");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      text.classList.toggle("active");
      if (text.classList.contains("active")) {
        text.style.maxHeight = text.scrollHeight + "px";
      } else {
        text.style.maxHeight = 0;
      }
    });
  });
}
