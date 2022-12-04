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

// __________ SVG ANIMATION __________ //

const cartSvg = document.querySelector('.cartSvg')
cartSvg.addEventListener('mouseenter', () => {
  cartSvg.innerHTML = `<path d="M26.25 64.1666C27.8608 64.1666 29.1667 62.8608 29.1667 61.25C29.1667 59.6391 27.8608 58.3333 26.25 58.3333C24.6392 58.3333 23.3333 59.6391 23.3333 61.25C23.3333 62.8608 24.6392 64.1666 26.25 64.1666Z" stroke="#9381FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M58.3333 64.1666C59.9442 64.1666 61.25 62.8608 61.25 61.25C61.25 59.6391 59.9442 58.3333 58.3333 58.3333C56.7225 58.3333 55.4167 59.6391 55.4167 61.25C55.4167 62.8608 56.7225 64.1666 58.3333 64.1666Z" stroke="#9381FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.91667 2.91669H14.5833L22.4 41.9709C22.6667 43.3137 23.3972 44.5199 24.4637 45.3784C25.5301 46.2369 26.8645 46.6929 28.2333 46.6667H56.5833C57.9521 46.6929 59.2866 46.2369 60.353 45.3784C61.4194 44.5199 62.15 43.3137 62.4167 41.9709L67.0833 17.5H17.5" stroke="#9381FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
})
cartSvg.addEventListener('mouseout', () => {
  cartSvg.innerHTML = `<path d="M26.25 64.1666C27.8608 64.1666 29.1667 62.8608 29.1667 61.25C29.1667 59.6391 27.8608 58.3333 26.25 58.3333C24.6392 58.3333 23.3333 59.6391 23.3333 61.25C23.3333 62.8608 24.6392 64.1666 26.25 64.1666Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M58.3333 64.1666C59.9442 64.1666 61.25 62.8608 61.25 61.25C61.25 59.6391 59.9442 58.3333 58.3333 58.3333C56.7225 58.3333 55.4167 59.6391 55.4167 61.25C55.4167 62.8608 56.7225 64.1666 58.3333 64.1666Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.91667 2.91669H14.5833L22.4 41.9709C22.6667 43.3137 23.3972 44.5199 24.4637 45.3784C25.5301 46.2369 26.8645 46.6929 28.2333 46.6667H56.5833C57.9521 46.6929 59.2866 46.2369 60.353 45.3784C61.4194 44.5199 62.15 43.3137 62.4167 41.9709L67.0833 17.5H17.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`
})