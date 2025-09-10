document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navlinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("open");
  });

  //testimonial carousel
  const cards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.getElementById("dots");
  let currentIndex = 0;

  cards.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dots span");
  function showSlide(index) {
    cards.forEach((card) => card.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    cards[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(autoSlide, 5000);
});
