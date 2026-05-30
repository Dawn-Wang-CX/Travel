const items = document.querySelectorAll(".slider-item");
let index = 0;

function showSlide() {
  items.forEach((item, i) => {
    if (i === index) {
      item.style.opacity = "1";
      item.style.zIndex = "1";
    } else {
      item.style.opacity = "0";
      item.style.zIndex = "0";
    }
  });
  index = (index + 1) % items.length;
}

setInterval(showSlide, 3500);
showSlide();
