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

const card = {
  names: [
    "Frank Sinatra",
    "Chris Angel",
    "Milan Angel",
    "Desperado Santos",
    "Marian Zobak",
    "MariankoCO Moj",
    "Giovanny Mari",
    "Frank Sinatra",
    "Chris Angel",
    "Milan Angel",
    "Desperado Santos",
    "Marian Zobak",
    "MariankoCO Moj",
    "Giovanny Mari",
  ],

  pictures: [
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dpic",
    "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
    "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dpic",
    "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvcnRyYWl0fGVufDB8MXwwfHx8Mg%3D%3D",
  ],
};

const miestoPreMeno = document.querySelector(".slider");

// names.map((name) => {
//   const div = document.createElement("div");
//   div.setAttribute("class", "slide");

//   const aElement = document.createElement("a");
//   const texnode = document.createTextNode(name);
//   const a = aElement.appendChild(texnode);

//   div.appendChild(a);

//   slider.appendChild(div);

//   // miestoPreMeno.appendChild(a);
// });

const temp = [];

for (let i = 0; i < card.names.length; i++) {
  // const nameAndAge = `${card.names[i]} ${`${card.pictures[i]}`;
  const div = document.createElement("div");
  div.setAttribute("class", "slide");

  const aElement = document.createElement("a");
  const mena = document.createTextNode(`${card.names[i]}`);
  const obrazky = document.createElement("img");
  obrazky.setAttribute("class", "imgMeasurement");
  obrazky.setAttribute("src", `${card.pictures[i]}`);

  const a = aElement.appendChild(mena);

  div.appendChild(a);
  div.appendChild(obrazky);

  slider.appendChild(div);
}

// const div = document.createElement("div");

// const span = document.createElement("span");
// const a = document.createElement("a");

// div.appendChild(span);
// div.appendChild(a);

// const divAppended = document.body.appendChild(div);
// console.log(divAppended);
