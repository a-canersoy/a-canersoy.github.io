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

    const rect = project.getBoundingClientRect();

    overlayContent.style.backgroundImage = project.style.backgroundImage;

    gsap.set(overlayContent, {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    });

    overlay.style.pointerEvents = "auto";

    gsap.to(overlayContent, {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      duration: 0.7,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating = false;
      }
    });

  });

});


// overlay'den çıkınca küçül
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
      activeProject = null;
      isAnimating = false;
    }
  });

});
