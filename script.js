const projectTrigger = document.getElementById('project-trigger');
const mainImage = document.getElementById('main-image');
const tealBox = document.getElementById('shape-teal');
const mustardBox = document.getElementById('shape-mustard');

// Hover Başladığında
projectTrigger.addEventListener('mouseenter', () => {
    // Yeni görsele geçiş (Örn: Purenest)
    mainImage.src = 'purenest.webp'; 
    
    // Renkleri değiştir
    tealBox.style.background = '#F7CAC9'; // Purenest pembesi
    mustardBox.style.background = '#E0E7E9';
});

// Hover Bittiğinde (Orijinal Haline Dönüş)
projectTrigger.addEventListener('mouseleave', () => {
    mainImage.src = 'herceptin.webp';
    tealBox.style.background = '#0A6E82';
    mustardBox.style.background = '#C3870F';
});
