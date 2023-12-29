window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const header = document.getElementById("main-header");
const image = document.getElementById("nav-logo");
const main_h1 = document.getElementById("main-h1");
const hrefs = document.getElementById("hrefs");

let timeoutId;

window.onscroll = () => {
  if (window.scrollY > 10) {
    clearTimeout(timeoutId);
    header.style.height = "114px";
    image.classList.add("scrolled");

    main_h1.style.opacity = 0;

    timeoutId = setTimeout(() => {
      image.style.transition = "transform 0s";
    }, 1100);
  }
};

gsap.from(".hrf", {
  scrollTrigger: { trigger: "#section", start: "10px top" },
  duration: 1.1,
  opacity: 0,
  display: "none",
  y: 60,
  stagger: 0.1,
  ease: "expo.inOut",
});

gsap.from("#bars-menu", {
  scrollTrigger: { trigger: "#section", start: "10px top" },
  duration: 1.1,
  opacity: 0,
  display: "none",
  y: 60,
  stagger: 0.1,
  ease: "expo.inOut",
});

let is_open = true;
const openClose = () => {
  hrefs.classList.toggle("open", is_open);
  is_open = !is_open;
};
