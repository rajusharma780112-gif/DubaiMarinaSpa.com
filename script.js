/* ==========================================
   DUBAI MARINA SPA
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Sticky Header
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            header.style.background="rgba(10,10,10,.95)";
            header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

        }else{

            header.style.background="rgba(10,10,10,.82)";
            header.style.boxShadow="none";

        }

    });

    /* ===============================
       Mobile Menu
    =============================== */

    const menuToggle=document.getElementById("menuToggle");
    const navbar=document.getElementById("navbar");

    if(menuToggle && navbar){

        menuToggle.addEventListener("click",()=>{

            navbar.classList.toggle("active");
            menuToggle.classList.toggle("open");

        });

        document.querySelectorAll("#navbar a").forEach(link=>{

            link.addEventListener("click",()=>{

                navbar.classList.remove("active");
                menuToggle.classList.remove("open");

            });

        });

    }

    /* ===============================
       Active Navigation
    =============================== */

    const current=window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link=>{

        if(link.getAttribute("href")===current){

            link.classList.add("active");

        }

    });

    /* ===============================
       Fade Animation
    =============================== */

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll("section").forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* ===============================
       Back To Top
    =============================== */

    const back=document.getElementById("backToTop");

    if(back){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){

                back.style.display="flex";

            }else{

                back.style.display="none";

            }

        });

        back.addEventListener("click",()=>{

            window.scrollTo({

                top:0,
                behavior:"smooth"

            });

        });

    }

});

/* ==========================================
   Loader
========================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});
