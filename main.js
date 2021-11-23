// ######################## Global variabls ########################
let menuBtn = document.querySelector(".icon");
let featurs = document.querySelectorAll(".feat");
let preloader = document.querySelector(".preloader");
let headingPs = document.querySelectorAll(".special-heading + p");
let headingDiv = document.querySelectorAll(".special-heading");

// ######################## Preloader ########################
window.scrollTo(0, 0);
window.onload = () => {
  preloader.classList.add("hide-pre");
  document.querySelector(".landing .intro-text").style.cssText =
    "transform: translateY(0); opacity:1;";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1500);
};

// ######################## Reset headers letters content ########################
headingDiv.forEach((el) => {
  let TextArr = el.textContent.split("");
  el.textContent = "";
  TextArr.forEach((letter, index) => {
    spanLetter = document.createElement("span");
    spanLetter.append(letter);
    spanLetter.style.transition = `1s ${index * 0.05}s ease`;
    el.append(spanLetter);
  });
});

// ######################## menu controle ########################
menuBtn.onclick = () => {
  menuBtn.classList.toggle("menuControle");
};
// ######################## scroll ########################

window.addEventListener("scroll", scrollFun);

// ######################## functions ########################

function scrollFun() {
  featurs.forEach((feat) => {
    if (
      window.scrollY + window.innerHeight > feat.offsetTop + 100 &&
      !feat.classList.contains("anim")
    ) {
      feat.classList.add("anim");
    }
  });
  headingPs.forEach((prg, index) => {
    if (
      window.scrollY + window.innerHeight >
        prg.offsetTop + prg.offsetParent.offsetTop + 100 &&
      !prg.classList.contains("headingP")
    ) {
      prg.classList.add("headingP");
      headingDiv[index]
        .querySelectorAll("span")
        .forEach((span) => (span.style.opacity = "1"));
      if (prg === headingPs[3]) {
        window.removeEventListener("scroll", scrollFun);
      }
    }
  });
}
