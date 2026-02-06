/*navbar*/
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
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
