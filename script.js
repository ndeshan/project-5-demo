document.addEventListener("DOMContentLoaded", function() {
    // Detect correct path for nav.html
    let isInsidePages = window.location.pathname.includes("/pages/");
    let navPath = isInsidePages ? "../layout/nav.html" : "layout/nav.html";

    fetch(navPath) // Load nav.html dynamically
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-container").innerHTML = data;

        // Reattach event listener for menu toggle after nav is loaded
        document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

        // Fix navigation links to prevent double /pages/ in URL
        document.querySelectorAll(".nav-links a").forEach(link => {
            let href = link.getAttribute("href");

            // Only update links that do NOT start with "../"
            if (!href.startsWith("..")) {
                link.href = isInsidePages ? "../" + href : href;
            }
        });
    })
    .catch(error => console.error("Error loading navigation:", error));
});

// Define the toggleMenu function
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}