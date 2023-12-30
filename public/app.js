gsap.registerPlugin(scrollTo);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const header = document.getElementById("main-header");
const image = document.getElementById("nav-logo");

if (!!window.sessionStorage.getItem("visited")) {
  header.classList.add("no-anim");
  image.classList.add("scrolled");
}

const main_h1 = document.getElementById("main-h1");
const scroll_btn = document.getElementById("scroll-btn");
const hrefs = document.getElementById("hrefs");

let timeoutId;

window.onscroll = () => {
  if (
    window.scrollY > 10 &&
    !image.classList.contains("scrolled") &&
    !header.classList.contains("no-anim")
  ) {
    clearTimeout(timeoutId);
    header.style.height = "114px";
    image.classList.add("scrolled");
    scroll_btn.style.opacity = 0;
    main_h1.style.opacity = 0;

    timeoutId = setTimeout(() => {
      image.style.transition = "transform 0s";
      scroll_btn.style.display = "none";
    }, 1000);
  }
};

if (
  !image.classList.contains("scrolled") &&
  !header.classList.contains("no-anim")
) {
  gsap.from(".hrf", {
    scrollTrigger: { trigger: "#section", start: "10px top" },
    duration: 1,
    opacity: 0,
    display: "none",
    y: 60,
    stagger: 0.1,
    ease: "expo.inOut",
  });

  gsap.from("#bars-menu", {
    scrollTrigger: { trigger: "#section", start: "10px top" },
    duration: 1,
    opacity: 0,
    display: "none",
    y: 60,
    stagger: 0.1,
    ease: "expo.inOut",
  });
}

const section_art = document.getElementById("section-art");
let j = 1;

const left_btn = document.getElementById("s_left");
const right_btn = document.getElementById("s_right");

let intervalId;
clearInterval(intervalId);
intervalId = setInterval(() => {
  slideGalleryRightSlow();
}, 3000);

function slideGalleryRight() {
  clearInterval(intervalId);
  if (j == 5) {
    section_art.style.transition = "none";
    section_art.style.transform = "translateX(-100vw)";
    j = 2;

    setTimeout(() => {
      section_art.style.transition = "transform .5s";
      section_art.style.transform = `translateX(-${j * 100}vw)`;
    }, 10);

    intervalId = setInterval(() => {
      slideGalleryRightSlow();
    }, 3000);
    return;
  }
  j++;

  section_art.style.transition = "transform 0.5s";
  section_art.style.transform = `translateX(-${j * 100}vw)`;

  intervalId = setInterval(() => {
    slideGalleryRightSlow();
  }, 3000);
}

function slideGalleryLeft() {
  clearInterval(intervalId);
  if (j == 1) {
    section_art.style.transition = "transform 0.5s";
    section_art.style.transform = `translateX(0)`;
    j = 4;

    left_btn.disabled = true;
    setTimeout(() => {
      section_art.style.transition = "none";
      section_art.style.transform = "translateX(-400vw)";
      left_btn.disabled = false;
    }, 500);

    intervalId = setInterval(() => {
      slideGalleryRightSlow();
    }, 3000);
    return;
  }
  j--;

  section_art.style.transition = "transform .5s";
  section_art.style.transform = `translateX(-${j * 100}vw)`;

  intervalId = setInterval(() => {
    slideGalleryRightSlow();
  }, 3000);
}

function slideGalleryRightSlow() {
  if (j == 5) {
    section_art.style.transition = "none";
    section_art.style.transform = "translateX(-100vw)";
    j = 2;

    setTimeout(() => {
      section_art.style.transition = "transform 1.5s";
      section_art.style.transform = `translateX(-${j * 100}vw)`;
    }, 10);
    return;
  }
  j++;

  section_art.style.transition = "transform 1.5s";
  section_art.style.transform = `translateX(-${j * 100}vw)`;
}
