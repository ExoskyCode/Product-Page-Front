// __________  NAV __________ //

const burgerBtn = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile");
burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("activeNav");
});

// __________ SLIDER __________ //

const slides = document.querySelectorAll(".bottomSlide");
const activeSlide = document.querySelector(".activeSlide");
slides.forEach((slide) =>
  slide.addEventListener("click", () => {
    activeSlide.src = slide.src;
  })
);

// __________ QUANTITY __________ //

const quantityValue = document.querySelector(".quantityValue");
let count = 1;
quantityValue.innerHTML = `${count}`;
const moreQuantity = document.querySelector(".more");
const lessQuantity = document.querySelector(".less");

moreQuantity.addEventListener("click", () => {
  count++;
  quantityValue.innerHTML = `${count}`;
});
lessQuantity.addEventListener("click", () => {
  if (count <= 1) {
  } else {
    count--;
    quantityValue.innerHTML = `${count}`;
  }
});

// __________ BUY __________ //

const buy = document.querySelector(".addToCart");
let cartNumber = document.querySelector(".cartNumber");

buy.addEventListener("click", () => {
  cartNumber.innerHTML = `${count}`;
});

