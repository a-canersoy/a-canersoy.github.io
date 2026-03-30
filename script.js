// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textLines = document.querySelectorAll('.reveal-text');
    
    // Animate the text sliding up
    textLines.forEach((line, index) => {
        line.style.opacity = "0";
        line.style.transform = "translateY(50px)";
        line.style.transition = "all 0.8s ease-out";
        
        setTimeout(() => {
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
        }, 200 * (index + 1));
    });

    // Subtle parallax for the background boxes
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        document.querySelector('.teal-box').style.transform = `translateX(${x}px) translateY(${y}px)`;
        document.querySelector('.mustard-box').style.transform = `translateX(${-x}px) translateY(${-y}px)`;
    });
});
