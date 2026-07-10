/* ==========================
   STICKY HEADER
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,8,8,.96)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(12,12,12,.88)";
        header.style.boxShadow = "none";

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
   FADE ANIMATION
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================
   IMAGE HOVER EFFECT
========================== */

document.querySelectorAll("img").forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.03)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


/* ==========================
   BUTTON RIPPLE EFFECT
========================== */

document.querySelectorAll(".primary-btn,.book-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        let ripple=document.createElement("span");

        ripple.className="ripple";

        ripple.style.left=e.offsetX+"px";

        ripple.style.top=e.offsetY+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("open");

});

/* Close menu after clicking a link */

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.classList.remove("open");

    });

});
/* ==========================
   PAGE LOADER
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

});

/* ==========================
   BACK TO TOP
========================== */

const topButton=document.getElementById("backToTop");

if(topButton){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================
   ACTIVE NAVIGATION
========================== */

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage || (currentPage==="" && href==="index.html")){

link.classList.add("active");

}

});
