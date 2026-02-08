window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 600); // délai léger pour un effet fluide
});
