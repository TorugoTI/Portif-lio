document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.opacity = 1;
            button.style.transform = "translateY(0)";
        }, index * 150);
    });
});
