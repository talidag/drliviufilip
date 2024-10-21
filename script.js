// Form fields
const formEl = document.getElementById("form");
const dateInput = document.getElementById("date");
const confirmationMessage = document.getElementById("confirmationMessage");
const confirmationText = document.getElementById("confirmationText");

// Intrebari
const intrebariCards = document.querySelectorAll(".intrebari__card");

// Mobile version

const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navLinksList = document.querySelector(".nav__links__list");
const navLinks = document.querySelectorAll(".nav__links__list a");
const logoEl = document.querySelector(".nav-logo-container");
const btnNavAdded = document.querySelector(".nav_btn_added");

// Set minimum date for the form
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(tomorrow.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;
  dateInput.min = minDate;
});

// Swiper
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});

// Form
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        confirmationText.textContent =
          "Programarea a fost trimisă. Vă vom suna în cel mai scurt timp pentru confirmare.";

        form.reset();
      } else {
        confirmationText.textContent =
          "Ne pare rău, dar am întâmpinat o problemă cu programarea. Vă rugăm să ne contactați telefonic sau să încercați din nou mai târziu.";
      }

      confirmationMessage.classList.add("visible");

      setTimeout(() => {
        confirmationMessage.classList.remove("visible");
      }, 4000);
    })
    .catch((error) => console.error(error)); // Add error here for the API
});

function closeConfirmation() {
  confirmationMessage.classList.remove("visible");
}

// Intrebari arrows

intrebariCards.forEach((card) => {
  const rightArrowQ = card.querySelector(".arrow-right-q");
  const downArrowQ = card.querySelector(".arrow-down-q");
  const intrebariAnswer = card.querySelector(".intrebari-answer");

  rightArrowQ.addEventListener("click", () => {
    toggleArrows(rightArrowQ, downArrowQ, intrebariAnswer);
  });

  downArrowQ.addEventListener("click", () => {
    toggleArrows(rightArrowQ, downArrowQ, intrebariAnswer);
  });
});

const toggleArrows = (rightArrow, downArrow, intrebariAnswer) => {
  rightArrow.classList.toggle("invisible");
  downArrow.classList.toggle("invisible");
  intrebariAnswer.classList.toggle("invisible");
};

// Mobile nav

function closeMenu() {
  if (window.innerWidth < 1100) {
    navLinksList.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
    document.body.style.overflow = "visible";
  }
}

const goToTopEl = document.querySelector("#goToTop");

// Go to top arrow
window.addEventListener("scroll", function () {
  const serviciiTarget = document.getElementById("hero");
  if (window.scrollY > serviciiTarget.offsetTop + serviciiTarget.offsetHeight) {
    goToTopEl.style.display = "block";
  } else {
    goToTopEl.style.display = "none";
  }
});
closeMenu;
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 1100) {
    btnNavAdded.classList.remove("invisible");
    btnNavAdded.addEventListener("click", closeMenu);
    // document.body.classList.add("overflow-y-hidden");
  } else {
    btnNavAdded.classList.add("invisible");
    // document.body.classList.add("overflow-y-hidden");
  }

  hamburgerMenuIcon.addEventListener("click", function () {
    navLinksList.style.display = "flex";
    hamburgerMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeMenuIcon.addEventListener("click", function () {
    navLinksList.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
    document.body.style.overflow = "visible";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  logoEl.addEventListener("click", closeMenu);

  const navbarHeight = 68;

  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      let offsetTop = targetElement.offsetTop - navbarHeight;
      if (targetElement.id === "despre" && window.innerWidth < 1100) {
        offsetTop = targetElement.offsetTop - navbarHeight + 120;
      }

      // Scroll to the element
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }
  const navLinksA = document.querySelectorAll(".nav__links__list li a");
  const footerLinksA = document.querySelectorAll(".footer__links__list li a");

  navLinksA.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove '#'
      scrollToElement(targetId);
    });
  });

  footerLinksA.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove '#'
      scrollToElement(targetId);
    });
  });
});
