export function initializeThemeToggle() {
  const theme = document.querySelector(".navbar__theme");
  theme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    console.log("click");
  });
}
