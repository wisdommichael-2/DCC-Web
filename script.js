document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-links");
    const indicator = document.querySelector(".nav-indicator");
    const items = nav.querySelectorAll("ul > li");

    function moveIndicator(element) {
        if (!element || !indicator) return;

        // Get coordinates relative to the parent nav-links container
        const navRect = nav.getBoundingClientRect();
        const itemRect = element.getBoundingClientRect();

        const leftPos = itemRect.left - navRect.left;
        const itemWidth = itemRect.width;

        indicator.style.left = `${leftPos}px`;
        indicator.style.width = `${itemWidth}px`;
    }

    // Set initial position to active item
    const activeItem = nav.querySelector("li.active") || items[0];
    if (activeItem) {
        moveIndicator(activeItem);
    }

    // Update line position on hover
    items.forEach(item => {
        item.addEventListener("mouseenter", (e) => {
            moveIndicator(e.currentTarget);
        });
    });

    // Reset line back to active item when mouse leaves navigation
    nav.addEventListener("mouseleave", () => {
        if (activeItem) {
            moveIndicator(activeItem);
        }
    });

    // Recalculate position on window resize
    window.addEventListener("resize", () => {
        const currentActive = nav.querySelector("li.active") || items[0];
        if (currentActive) {
            moveIndicator(currentActive);
        }
    });
});
// --- Mobile Hamburger Menu Logic ---
    const menuToggle = document.getElementById("mobile-menu");
    const navContainer = document.querySelector(".nav-links");

    if (menuToggle && navContainer) {
        menuToggle.addEventListener("click", () => {
            // Toggles the visibility of the nav links
            navContainer.classList.toggle("nav-active");
            
            // Optional: Recalculate indicator line if menu opens
            const currentActive = nav.querySelector("li.active") || items[0];
            if (currentActive && navContainer.classList.contains("nav-active")) {
                setTimeout(() => moveIndicator(currentActive), 50);
            }
        });
    }
// --- Mobile Submenu Accordion Toggle ---
    const navItemsWithSub = document.querySelectorAll(".nav-links > ul > li");

    navItemsWithSub.forEach(item => {
        const parentLink = item.querySelector("a");
        const subMenu = item.querySelector("ul");

        if (subMenu && parentLink) {
            parentLink.addEventListener("click", (e) => {
                // Check if device is running in mobile view
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // Prevents instant page navigation on parent click

                    // Close other open submenus
                    navItemsWithSub.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove("open");
                        }
                    });

                    // Toggle current clicked submenu
                    item.classList.toggle("open");
                }
            });
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navContainer = document.querySelector(".nav-links");

    // Hamburger menu toggle
    if (menuToggle && navContainer) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("is-active");
            navContainer.classList.toggle("nav-active");
        });
    }

    // Mobile Submenu Accordion Handler
    const topNav = document.querySelector(".nav-links > ul");
    if (topNav) {
        topNav.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                const targetAnchor = e.target.closest("a");
                if (!targetAnchor) return;

                const parentLi = targetAnchor.parentElement;
                const subMenu = parentLi.querySelector("ul");

                // If the link has a child submenu, handle accordion open/close
                if (subMenu) {
                    e.preventDefault();

                    // Close all other open submenus
                    document.querySelectorAll(".nav-links > ul > li.open").forEach(li => {
                        if (li !== parentLi) {
                            li.classList.remove("open");
                        }
                    });

                    // Toggle current item
                    parentLi.classList.toggle("open");
                }
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // Toggle Main Dropdown Menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle("is-active");
            navLinks.classList.toggle("nav-active");
        });
    }

    // Toggle Submenu Accordions
    const mainMenuItems = document.querySelectorAll(".nav-links > ul > li");

    mainMenuItems.forEach(item => {
        const link = item.querySelector("a");
        const subMenu = item.querySelector("ul, .drop1, .drop2, .drop3, .drop4");

        if (subMenu && link) {
            link.addEventListener("click", (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();

                    // Close all other submenus
                    mainMenuItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove("submenu-open");
                        }
                    });

                    // Toggle clicked submenu
                    item.classList.toggle("submenu-open");
                }
            });
        }
    });
});