// ACTIVE NAV NO SCROLL
const secoes = document.querySelectorAll("section");
const linksNav = document.querySelectorAll("header nav a");

window.addEventListener("scroll", function () {
  secoes.forEach(function (secao) {
    const rect = secao.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      linksNav.forEach((link) => link.classList.remove("active"));
      const linkAtivo = document.querySelector(
        'header nav a[href="#' + secao.id + '"]',
      );
      if (linkAtivo) linkAtivo.classList.add("active");
    }
  });
});

// FADE IN NAS SEÇÕES
const fadeEls = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
      }
    });
  },
  { threshold: 0.1 },
);

fadeEls.forEach(function (el) {
  observer.observe(el);
});

// SUBMIT DO FORMULÁRIO
const form = document.querySelector(".contato-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = "mensagem enviada ✓";
  btn.style.background = "#4caf50";
  setTimeout(() => {
    btn.textContent = "enviar mensagem";
    btn.style.background = "";
    form.reset();
  }, 3000);
});
