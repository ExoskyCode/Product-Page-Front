const customizationSpan = document.querySelector(".customizationSpan");
const customizationInput = document.getElementById("customizationInput");
const confirmCustomization = document.querySelector(".confirm");
confirmCustomization.addEventListener("click", () => {
  customizationSpan.innerHTML = `${customizationInput.value}`;
});

// __________ SLIDER __________ //

const slides = document.querySelectorAll(".bottomSlide");
const activeSlide = document.querySelector(".activeSlide");
slides.forEach((slide) =>
  slide.addEventListener("click", () => {
    activeSlide.src = slide.src;
    customizationSpan.innerHTML = ""
  })
);

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

const buy = document.querySelector(".addToCart");
let cartNumber = document.querySelector(".cartNumber");
let price = 23;
buy.innerHTML = `Ajouter au panier (${price}.00 €)`;

buy.addEventListener("click", () => {
  if (customizationSpan.value != "") {
    price = price * count + 7;
    buy.innerHTML = `Ajouter au panier (${price}.00 €)`;
  } else {
    price = price * count;
    buy.innerHTML = `Ajouter au panier (${price}.00 €)`;
  }
  cartNumber.innerHTML = `${count}`;
});

const burgerBtn = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile");
burgerBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("activeNav");
});
