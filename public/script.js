(function () {
  // Year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    const toggle = () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileNav.setAttribute("aria-hidden", String(!isOpen));
    };

    hamburger.addEventListener("click", toggle);

    // Close menu on link click
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("aria-hidden", "true");
      });
    });
  }
})();
