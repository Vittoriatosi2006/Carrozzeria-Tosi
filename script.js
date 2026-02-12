/*navbar*/
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});

/*1 PARTE*/
const arrow = document.getElementById("scrollToSeconda");
const target = document.getElementById("parte2");

arrow.addEventListener("click", () => {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/*2 PARTE*/
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = document.querySelectorAll(".foto50anni");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  function showImage(index) {
    if (window.innerWidth > 1300) {
      images.forEach((img) => {
        img.style.display = "block";
      });
      return;
    }

    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex);

  window.addEventListener("resize", () => {
    showImage(currentIndex);
  });
});

/*OMINO*/
const omino = document.querySelector(".omino");
const fumetto = document.querySelector(".fumetto");

const frasiSezioni = [
  { id: "parte1", testo: "Benvenuti alla Carrozzeria F.lli Tosi! 🚗" },
  { id: "parte2", testo: "Da oltre 50 anni all'opera 🛠️" },
  { id: "parte3", testo: "Scopri tutti i nostri servizi 🏭" },
  { id: "parte4", testo: "Ecco alcune nostre foto 📸" },
  { id: "parteFooter", testo: "Passate a trovarci! 📍" },
];

let currentSezione = null;

const observerOmino = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const sezione = frasiSezioni.find((s) => s.id === entry.target.id);
      if (!sezione) return;

      if (currentSezione === sezione.id) return;
      currentSezione = sezione.id;

      fumetto.textContent = sezione.testo;

      fumetto.textContent = sezione.testo;
    });
  },
  {
    threshold: 0.5,
  },
);

frasiSezioni.forEach((s) => {
  const el = document.getElementById(s.id);
  if (el) observerOmino.observe(el);
});

omino.addEventListener("click", () => {
  fumetto.style.opacity = 1; // mostra fumetto al click/tap
});

omino.addEventListener("touchend", () => {
  fumetto.style.opacity = 1; // iPhone
});

/*footer*/
const footerSections = document.querySelectorAll(".footer-section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

footerSections.forEach((section) => {
  observer.observe(section);
});
