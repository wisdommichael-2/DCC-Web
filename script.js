document.addEventListener("DOMContentLoaded", () => {
    const navList = document.querySelector("nav ul"); // Measure relative to ul
    const navItems = document.querySelectorAll("nav ul > li");
    const indicator = document.querySelector(".nav-indicator");
    const activeItem = document.querySelector("nav ul > li.active");

    function moveIndicator(element) {
        if (!element || !navList) return;
        const rect = element.getBoundingClientRect();
        const listRect = navList.getBoundingClientRect();

        // Calculate position relative directly to the text list container
        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.left - listRect.left}px`;
    }

    if (activeItem) moveIndicator(activeItem);

    navItems.forEach(item => {
        item.addEventListener("mouseenter", (e) => moveIndicator(e.currentTarget));
    });

    document.querySelector("nav").addEventListener("mouseleave", () => {
        if (activeItem) moveIndicator(activeItem);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => showSlide(idx));
    });
});