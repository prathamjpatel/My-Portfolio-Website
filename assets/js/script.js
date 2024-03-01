// function myMenuFunction(){
//     var menuBth = document.getElementById("MyNavMenu");
//     if(menuBth.className==="nav__menu"){
//         menuBth.className+="responsive";
//     }else{
//         menuBth.className="nav__menu";
//     }
// }

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle__switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

var typingEffect = new Typed(".typed__text", {
  strings: ["Devloper", "designer"],
  loop: true,
  typeSpeed: 150,
  backspeed: 50,
  backdelay: 2000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured__name", { delay: 100 });
sr.reveal(".text__info", { delay: 200 });
sr.reveal(".text__btn", { delay: 200 });
sr.reveal(".social__icons", { delay: 200 });
sr.reveal(".featured__image", { delay: 320 });

sr.reveal(".project__box", { interval: 200 });
sr.reveal(".header__top", {});

const srleft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srleft.reveal(".about__info", { delay: 100 });
srleft.reveal(".contact__info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills", { delay: 100 });
srRight.reveal(".skill__box", { delay: 100 });

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,

      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active__link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active__link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
