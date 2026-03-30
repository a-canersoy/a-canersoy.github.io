const projectItems = document.querySelectorAll('.project-item');
const mainImage = document.getElementById('main-display-image');
const shapeLeft = document.getElementById('shape-left');
const shapeRight = document.getElementById('shape-right');

projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Verileri al
        const newImg = item.getAttribute('data-image');
        const color1 = item.getAttribute('data-color1');
        const color2 = item.getAttribute('data-color2');

        // Değişimleri uygula
        mainImage.src = newImg;
        shapeLeft.style.background = color1;
        shapeRight.style.background = color2;
        
        // Görsel efekti
        mainImage.style.transform = 'scale(1.05) rotate(1deg)';
    });

    item.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1) rotate(0deg)';
    });
});
