const triggers = document.querySelectorAll('.trigger');
const mainImg = document.getElementById('featured-img');
const b1 = document.getElementById('block1');
const b2 = document.getElementById('block2');

triggers.forEach(t => {
    t.addEventListener('mouseenter', () => {
        const newImg = t.getAttribute('data-img');
        const c1 = t.getAttribute('data-c1');
        const c2 = t.getAttribute('data-c2');

        mainImg.src = newImg;
        b1.style.background = c1;
        b2.style.background = c2;
    });
});
