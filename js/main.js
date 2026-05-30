const backTopBtn = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTopBtn.classList.remove("hidden");
    backTopBtn.classList.add("flex");
  } else {
    backTopBtn.classList.add("hidden");
    backTopBtn.classList.remove("flex");
  }
});

backTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
