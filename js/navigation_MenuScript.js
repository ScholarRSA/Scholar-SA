document.addEventListener("DOMContentLoaded", () => {
    const sideNav = document.getElementById("sideNav");
    const menuToggle = document.getElementById("menuToggle");
    const closeNav = document.getElementById("closeNav");

    function openNav() {
        sideNav.classList.add("open");
        history.pushState({ menuOpen: true }, "");
    }

    function closeSideNav() {
        sideNav.classList.remove("open");
    }

    // Always close on new load
    closeSideNav();

    // Open on menu button
    menuToggle.addEventListener("click", openNav);

    // Close on close button
    closeNav.addEventListener("click", () => {
        closeSideNav();
        history.back(); // Trigger popstate
    });

    // Close on browser back/forward
    window.addEventListener("popstate", (event) => {
        if (!event.state || !event.state.menuOpen) {
            closeSideNav();
        }
    });

    // ✅ Close nav when clicking outside it
    document.addEventListener("click", (e) => {
        const isOpen = sideNav.classList.contains("open");

        // If menu is open and clicked target is outside nav and not the toggle
        if (
            isOpen &&
            !sideNav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            closeSideNav();

            // If user clicked outside instead of pressing "back", sync history
            if (history.state && history.state.menuOpen) {
                history.back();
            }
        }
    });

    // ✅ Close nav if page restored from cache (Safari, Firefox)
    window.addEventListener("pageshow", () => {
        if (sideNav.classList.contains("open")) {
            closeSideNav();
        }
    });
});
