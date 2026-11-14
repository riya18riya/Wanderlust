const header = document.getElementById("site-header");
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
});

nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
        header.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
    }
});