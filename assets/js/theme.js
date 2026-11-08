(function () {
  const root = document.documentElement;
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("sanoar-theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }
  root.setAttribute("data-theme", savedTheme === "dark" ? "dark" : "light");
})();
