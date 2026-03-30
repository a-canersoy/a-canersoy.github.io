document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.name-line');
    const teal = document.querySelector('.teal-rect');
    const mustard = document.querySelector('.mustard-rect');

    // 1. Simple Entrance Animation
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.transition = "all 0.8s ease-out";
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // 2. Subtle Mouse Parallax Effect
    document.addEventListener('mousemove', (e) => {
        let moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        let moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        // Move the shapes in opposite directions for depth
        teal.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`;
        mustard.style.transform = `translate(${moveX * 1.5}px, ${moveY * 1.5}px)`;
    });
});
