/* ==========================================
   DUBAI MARINA SPA
   LUXURY VERSION 2.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar a").forEach(link=>{

        const href = link.getAttribute("href");

        if(href === currentPage || (currentPage==="" && href==="index.html")){

            link.classList.add("active");

        }

    });

    /* ==========================================
       SMOOTH PAGE FADE
    ========================================== */

    document.body.style.opacity = "0";

    window.addEventListener("load",()=>{

        document.body.style.transition="opacity .6s ease";

        document.body.style.opacity="1";

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealItems = document.querySelectorAll(

        ".feature-card,.service-card,.testimonial-card,.stat-card,.gallery-grid img"

    );

    const reveal = ()=>{

        revealItems.forEach(item=>{

            const top = item.getBoundingClientRect().top;

            const visible = window.innerHeight - 100;

            if(top < visible){

                item.classList.add("show");

            }

        });

    };

    reveal();

    window.addEventListener("scroll",reveal);

});
/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const increment = Math.ceil(target / 80);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = text;

            } else {

                if (text.includes("+")) {

                    counter.innerText = current + "+";

                } else {

                    counter.innerText = current;

                }

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
   FLOATING BOOK BUTTON
========================================== */

const floatingButton = document.createElement("a");

floatingButton.href = "contact.html";

floatingButton.className = "floating-book";

floatingButton.innerHTML = "📅 Book Now";

document.body.appendChild(floatingButton);


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.createElement("button");

backToTop.id = "backToTop";

backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll(".btn,.book-btn,.small-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});
/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImage" src="" alt="Spa Image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImage.src = image.src;
            document.body.style.overflow = "hidden";

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";
        document.body.style.overflow = "auto";

    });

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";
            document.body.style.overflow = "auto";

        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            lightbox.style.display = "none";
            document.body.style.overflow = "auto";

        }

    });

}

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const name = document.querySelector('input[name="Full Name"]');
        const email = document.querySelector('input[name="Email"]');

        if (name && name.value.trim().length < 3) {

            alert("Please enter your full name.");

            e.preventDefault();

            return;

        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {

            alert("Please enter a valid email address.");

            e.preventDefault();

            return;

        }

    });

}

/* ==========================================
   IMAGE FADE-IN
========================================== */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            imageObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.2

});

images.forEach(image => {

    imageObserver.observe(image);

});

/* ==========================================
   PREVENT DOUBLE FORM SUBMISSION
========================================== */

if (form) {

    form.addEventListener("submit", () => {

        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');

        if (submitButton) {

            submitButton.disabled = true;
            submitButton.innerText = "Sending...";

        }

    });

}

console.log("Dubai Marina Spa Luxury Version Loaded");
