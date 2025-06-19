document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || (linkPage === "" && currentPage === "index.html")) {
            link.classList.add("active");

            // Prevent reloading if already on current page
            link.addEventListener("click", (e) => {
                e.preventDefault();
            });
        }
    });
});
