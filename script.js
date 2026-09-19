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