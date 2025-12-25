(function () {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mnav");

  if (btn && nav) {
    const toggle = () => {
      const isOpen = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      nav.setAttribute("aria-hidden", String(!isOpen));
    };

    btn.addEventListener("click", toggle);

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        nav.setAttribute("aria-hidden", "true");
      });
    });
  }
})();
