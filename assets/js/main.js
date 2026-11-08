(function () {
  "use strict";

  const body = document.body;
  const root = document.documentElement;
  const themeButtons = [
    document.getElementById("theme-toggle"),
    document.getElementById("mobile-theme-toggle")
  ].filter(Boolean);
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("sidebar-close");
  const backdrop = document.getElementById("sidebar-backdrop");

  document.querySelectorAll(".current-year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  function updateThemeLabels() {
    const dark = root.getAttribute("data-theme") === "dark";
    const label = dark ? "Light mode" : "Dark mode";
    const icon = dark ? "☼" : "◐";
    const desktopLabel = document.querySelector(".theme-label");
    const desktopIcon = document.querySelector(".theme-icon");
    if (desktopLabel) desktopLabel.textContent = label;
    if (desktopIcon) desktopIcon.textContent = icon;
    themeButtons.forEach((button) => {
      button.setAttribute("aria-label", "Switch to " + (dark ? "light" : "dark") + " theme");
      if (button.id === "mobile-theme-toggle") button.textContent = icon;
    });
  }

  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("sanoar-theme", next);
    } catch (error) {
      // Theme still works for the current page if storage is unavailable.
    }
    updateThemeLabels();
  }

  themeButtons.forEach((button) => button.addEventListener("click", toggleTheme));
  updateThemeLabels();

  function openMenu() {
    body.classList.add("nav-open");
    if (menuOpen) menuOpen.setAttribute("aria-expanded", "true");
    if (menuClose) menuClose.focus();
  }

  function closeMenu() {
    body.classList.remove("nav-open");
    if (menuOpen) {
      menuOpen.setAttribute("aria-expanded", "false");
      menuOpen.focus();
    }
  }

  if (menuOpen) menuOpen.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("nav-open")) closeMenu();
  });

  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.addEventListener("click", () => body.classList.remove("nav-open"));
  });

  // Publication search is ready for use once publication entries are added.
  const search = document.getElementById("publication-search");
  const publicationList = document.getElementById("publication-list");
  if (search && publicationList) {
    search.addEventListener("input", () => {
      const hasEntries = publicationList.querySelectorAll("[data-publication]").length > 0;
      if (!hasEntries && search.value.trim()) {
        publicationList.setAttribute("aria-label", "No publication entries have been added yet");
      }
    });
  }
})();
