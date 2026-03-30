const projects = document.querySelectorAll(".project");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlayContent");

projects.forEach(project => {
  project.addEventListener("click", () => {
    const bg = project.style.backgroundImage;

    overlayContent.style.backgroundImage = bg;
    overlay.classList.add("active");
  });
});

// overlay'e tıklayınca kapanır
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// ESC ile kapatma
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove("active");
  }
});