document.addEventListener("DOMContentLoaded", function() {
   
    let isInsidePages = window.location.pathname.includes("/pages/");
    let navPath = isInsidePages ? "../layout/nav.html" : "layout/nav.html";

    fetch(navPath) 
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-container").innerHTML = data;

        document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

        document.querySelectorAll(".nav-links a").forEach(link => {
            let href = link.getAttribute("href");

            if (!href.startsWith("..")) {
                link.href = isInsidePages ? "../" + href : href;
            }
        });
    })
    .catch(error => console.error("Error loading navigation:", error));
});


function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }