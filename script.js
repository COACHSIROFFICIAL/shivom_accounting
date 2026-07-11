// ==========================================
// Shivom Accounting Services
// Premium Website Script
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Shivom Accounting Services Website Loaded");

    // Smooth Button Animation
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-3px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
        });

    });

    // Service Card Animation
    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

});
