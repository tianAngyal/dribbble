const html = document.querySelector("html");
const magnify = document.querySelector(".magnify");
const search = document.querySelector(".search");
const headerRightSideUl = document.querySelector(".header-nav-rightSide");
const headerLeftSideUl = document.querySelector(".header-nav-ul");

const iconHamburger = document.querySelector(".icons-hamburger");

const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");

// const loginElement = document.querySelector(".accounts-login");
// const liElement = document.createElement("li");

// function checkWidth() {
//   const currentWidth = window.innerWidth;

//   if (currentWidth < 1050) {
//     if (loginElement && loginElement.parentNode === headerRightSideUl) {
//       headerRightSideUl.removeChild(loginElement);
//       liElement.appendChild(loginElement);

//       // headerLeftSideUl.appendChild(liElement);
//     }
//     // } else if (
//     // currentWidth > 1050 &&
//     // !loginElement &&
//     // !headerRightSideUl.contains(loginElement)
//     // )
//   } else if (
//     currentWidth > 1050 &&
//     loginElement &&
//     !headerRightSideUl.contains(loginElement)
//   ) {
//     // headerRightSide.appendChild(loginElement);
//   }
// }

// window.addEventListener("resize", checkWidth);

// checkWidth();

iconHamburger.addEventListener("click", function () {
  headerLeftSideUl.classList.toggle("show");
  iconHamburger.classList.toggle("fa-xmark");
  document.body.classList.toggle("fixed");
});

sliderContainer.addEventListener("mouseover", function () {
  slider.style.animationPlayState = "paused";
});

sliderContainer.addEventListener("mouseleave", function () {
  slider.style.animationPlayState = "running";
});
