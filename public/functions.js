window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onload = () => {
  if (!window.sessionStorage.getItem("visited"))
    window.sessionStorage.setItem("visited", true);
};

// window.addEventListener("popstate", function (event) {
//   console.log(event);
// });

let is_open = true;
const openClose = () => {
  hrefs.classList.toggle("open", is_open);
  is_open = !is_open;
};

const goToContact = (val) => {
  gsap.to(window, {
    scrollTo: { y: val, offsetY: 150 },
    duration: 1,
    ease: "expo.inOut",
  });
};

const goToContactRemote = () => {
  window.open("/", "_self");
  window.scrollTo(0, 300);
};

const goBack = () => {
  history.back();
};
