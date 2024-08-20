document.getElementById("btnMenu").addEventListener("click", () => {
  const movil = document.documentElement.style.getPropertyValue("--movil");

  if (movil !== "flex") {
    document.documentElement.style.setProperty("--movil", "flex");
  } else {
    document.documentElement.style.setProperty("--movil", "none");
  }
});
