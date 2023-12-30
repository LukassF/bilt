window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onload = () => {
  if (!window.sessionStorage.getItem("visited"))
    window.sessionStorage.setItem("visited", true);
};

let is_open = true;
const openClose = () => {
  hrefs.classList.toggle("open", is_open);
  is_open = !is_open;
};

const goTo = (val) => {
  gsap.to(window, {
    scrollTo: { y: val, offsetY: 150 },
    duration: 1,
    ease: "expo.inOut",
  });
};

const goBack = () => {
  history.back();
};
