const serviciiDiv = document.querySelector(".servicii__carusel");

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
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
    on: {
      init: function () {
        updateActiveSlide(this);
      },
      slideChange: function () {
        updateActiveSlide(this);
      },
    },
  });

  function updateActiveSlide(swiper) {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;
    const centerIndex =
      activeIndex + Math.floor(swiper.params.slidesPerView / 2);

    slides.forEach((slide, index) => {
      slide.classList.remove("active-slide");
    });

    if (slides[centerIndex]) {
      slides[centerIndex].classList.add("active-slide");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(tomorrow.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;

  console.log(minDate);
  dateInput.min = minDate;
});

function mySubmitFunction(e) {
  e.preventDefault();

  // Clear all input fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("hour").value = "";
  document.getElementById("additionalInfo").value = "";

  // Display confirmation message
  let confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.classList.add("visible");

  setTimeout(() => {
    confirmationMessage.classList.remove("visible");
  }, 4000);

  return false;
}

function closeConfirmation() {
  let confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.classList.remove("visible");
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
  const closeMenuIcon = document.querySelector(".close-menu-icon");
  const navLinksList = document.querySelector(".nav__links__list");
  const navLinks = document.querySelectorAll(".nav__links__list a");
  const logoEl = this.documentElement.querySelector(".nav-logo-container");

  function closeMenu() {
    navLinksList.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  }

  hamburgerMenuIcon.addEventListener("click", function () {
    navLinksList.style.display = "flex";
    hamburgerMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
  });

  closeMenuIcon.addEventListener("click", function () {
    navLinksList.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  logoEl.addEventListener("click", closeMenu);
});
