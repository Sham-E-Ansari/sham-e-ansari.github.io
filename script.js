(function () {

  // ── Footer year ──
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  // ── Nav scroll shadow ──
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Mobile nav toggle ──
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });

  // ── Timeline scroll-in animation ──
  var items = document.querySelectorAll('.tl-item');
  items.forEach(function (el) { el.classList.add('animate'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10px 0px' });
    items.forEach(function (el) { io.observe(el); });
    // Fallback: show all items after 800ms in case observer doesn't fire
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add('show'); });
    }, 800);
  } else {
    items.forEach(function (el) { el.classList.add('show'); });
  }

  // ── Active nav link highlight on scroll ──
  var secs = document.querySelectorAll('[id]');
  var navAs = document.querySelectorAll('.nav-links a');
  function onScroll() {
    var y = window.scrollY + 120;
    var cur = '';
    secs.forEach(function (s) { if (y >= s.offsetTop) cur = s.id; });
    navAs.forEach(function (a) {
      a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--gold)' : '';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

})();
