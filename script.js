function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
}let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function showSlide(i) {
  if (i >= totalSlides) index = 0;
  else if (i < 0) index = totalSlides - 1;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

/* AUTO SLIDE */
setInterval(() => {
  nextSlide();
}, 4000);