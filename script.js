const projects = document.querySelectorAll(".project");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlayContent");

let isAnimating = false;
let activeProject = null;

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    if (isAnimating) return;

    isAnimating = true;
    activeProject = project;

    // Görseli alırken url() kısmını doğru temizleyelim
    const bgImg = getComputedStyle(project).backgroundImage;
    overlayContent.style.backgroundImage = bgImg;

    const rect = project.getBoundingClientRect();

    // Başlangıç pozisyonunu ayarla
    gsap.set(overlayContent, {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      opacity: 1 // Görünür yap
    });

    overlay.style.pointerEvents = "auto";

    gsap.to(overlayContent, {
      x: 0,
      y: 0,
      width: "100vw", // window.innerWidth yerine string kullanmak daha güvenli
      height: "100vh",
      duration: 0.7,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating = false;
      }
    });
  });
});

// Küçülme efekti
overlay.addEventListener("mouseleave", () => {
  if (isAnimating || !activeProject) return;

  isAnimating = true;
  const rect = activeProject.getBoundingClientRect();

  gsap.to(overlayContent, {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      overlay.style.pointerEvents = "none";
      gsap.set(overlayContent, { opacity: 0 }); // Küçülünce gizle
      activeProject = null;
      isAnimating = false;
    }
  });
});
