
/* ==========================================
   DUBAI MARINA SPA
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

    /* ==========================
       BOOKING FORM VALIDATION
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            const name = document.querySelector('input[name="Full Name"]');
            const email = document.querySelector('input[name="Email"]');
            const whatsapp = document.querySelector('input[name="WhatsApp Number"]');

            if (name && name.value.trim().length < 3) {

                alert("Please enter your full name.");

                e.preventDefault();

                return;

            }

            if (email && !email.value.includes("@")) {

                alert("Please enter a valid email address.");

                e.preventDefault();

                return;

            }

            if (whatsapp && whatsapp.value.trim().length < 8) {

                alert("Please enter a valid WhatsApp number.");

                e.preventDefault();

                return;

            }

        });

    }

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#d4af37";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "9999";
backToTop.style.transition = "0.3s";
backToTop.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
     































