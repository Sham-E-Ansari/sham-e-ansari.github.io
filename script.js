(function () {
  var content = window.portfolioContent;
  var sectionNames = [['about', 'About'], ['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['awards', 'Awards'], ['certifications', 'Certifications'], ['publications', 'Publications'], ['education', 'Education'], ['contact', 'Contact']];

  document.title = content.siteTitle;
  document.getElementById('navLinks').innerHTML = sectionNames.map(function (section) {
    return '<li><a href="#' + section[0] + '">' + section[1] + '</a></li>';
  }).join('');

  var hero = content.hero;
  document.getElementById('heroText').innerHTML = '<p class="hero-eyebrow">' + hero.eyebrow + '</p><h1 class="hero-name">' + hero.titleFirst + '<br><i>' + hero.titleSecond + '</i></h1><p class="hero-sub"><strong>' + hero.lead + '</strong><br>' + hero.description + '</p><div class="hero-actions"><a href="#contact" class="btn">' + hero.primaryAction + '</a><a href="' + content.cv + '" class="btn" download>Download CV</a><a href="#experience" class="btn-text">' + hero.secondaryAction + '</a></div>';
  document.getElementById('heroPhoto').innerHTML = '<img src="' + content.photo.src + '" alt="' + content.photo.alt + '">';

  function sectionHead(number, title) {
    return '<div class="section-head"><span class="s-num">' + number + '</span><h2 class="s-title">' + title + '</h2></div>';
  }
  function timeline(items) {
    return '<div class="timeline">' + items.map(function (item) {
      var image = item[4] ? '<a class="tl-img" href="' + item[4] + '" target="_blank" rel="noopener"><img src="' + item[4] + '" alt="' + item[2] + '" loading="lazy" onerror="this.parentNode.remove()"></a>' : '';
      return '<div class="tl-item"><div class="tl-date">' + item[0] + '</div><div><p class="tl-company">' + item[1] + '</p><p class="tl-role">' + item[2] + '</p><p class="tl-desc">' + item[3] + '</p>' + image + '</div></div>';
    }).join('') + '</div>';
  }
  function dateFromMonthYear(value) {
    var parts = value.match(/^([A-Za-z]{3}) (\d{4})/);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return new Date(Number(parts[2]), months.indexOf(parts[1]), 1);
  }
  function yearsSince(startDate) {
    var today = new Date();
    var months = (today.getFullYear() - startDate.getFullYear()) * 12 + today.getMonth() - startDate.getMonth();
    return Math.floor(months / 12);
  }
  var experienceStart = content.experience.reduce(function (earliest, item) {
    var startDate = dateFromMonthYear(item[0]);
    return !earliest || startDate < earliest ? startDate : earliest;
  }, null);
  var stats = [
    [content.highlights.automations, 'Automations delivered at BRAC Bank'],
    [content.highlights.manHoursDaily, 'Man-hours saved every day'],
    [content.highlights.liveBots, 'Bots in live production'],
    [yearsSince(experienceStart) + '+', 'Years of experience']
  ];
  function projectCards(items) {
    return '<div class="projects-grid">' + items.map(function (p) {
      return '<article class="proj' + (p.featured ? ' featured' : '') + '"><div class="proj-meta"><span>' + p.org + '</span><span>' + p.date + '</span></div><h3 class="proj-title">' + p.name + '</h3><p class="proj-desc">' + p.desc + '</p><div class="proj-tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' + (p.link ? '<a class="proj-link" href="' + p.link + '" target="_blank" rel="noopener">View on GitHub →</a>' : '') + '</article>';
    }).join('') + '</div>';
  }

  document.getElementById('aboutContent').innerHTML = sectionHead('01', 'About') + '<div class="about-wrap"><div class="about-text">' + content.about.paragraphs.map(function (paragraph) { return '<p>' + paragraph + '</p>'; }).join('') + '</div><div class="about-col-divider"></div><div class="about-stats">' + stats.map(function (stat) { return '<div class="stat"><span class="stat-n">' + stat[0] + '</span><span class="stat-l">' + stat[1] + '</span></div>'; }).join('') + '</div></div>';
  document.getElementById('projectsContent').innerHTML = sectionHead('02', 'Projects') + projectCards(content.projects);
  document.getElementById('experienceContent').innerHTML = sectionHead('03', 'Experience') + timeline(content.experience);
  document.getElementById('skillsContent').innerHTML = sectionHead('04', 'Skills') + '<div class="skills-wrap">' + Object.keys(content.skills).map(function (category) { return '<div><p class="skill-cat-label">' + category + '</p><div class="tags">' + content.skills[category].map(function (skill) { return '<span class="tag">' + skill + '</span>'; }).join('') + '</div></div>'; }).join('') + '</div>';
  document.getElementById('awardsContent').innerHTML = sectionHead('05', 'Honors & Awards') + timeline(content.awards);
  document.getElementById('certificationsContent').innerHTML = sectionHead('06', 'Certifications') + timeline(content.certifications);
  document.getElementById('publicationsContent').innerHTML = sectionHead('07', 'Publications') + '<div class="timeline">' + content.publications.map(function (title, index) { return '<div class="tl-item"><div class="tl-date">Paper ' + (index + 1) + '</div><div><p class="tl-role">' + title + '</p></div></div>'; }).join('') + '</div>';
  document.getElementById('educationContent').innerHTML = sectionHead('08', 'Education') + timeline(content.education);

  var contact = content.contact;
  document.getElementById('contactContent').innerHTML = '<p class="contact-headline">' + contact.headlineFirst + '<br><i>' + contact.headlineSecond + '</i></p><p class="contact-sub">' + contact.description + '</p><div class="contact-links">' + contact.links.map(function (link) { return '<a href="' + link[1] + '" target="_blank" rel="noopener" class="c-link">' + link[0] + '</a>'; }).join('') + '</div>';
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = content.name;
  document.getElementById('footer-content').textContent = content.footer;

  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
  var themeToggle = document.getElementById('themeToggle');
  var savedTheme = localStorage.getItem('portfolio-theme');
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    var isLight = theme === 'light';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  }
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
  themeToggle.addEventListener('click', function () {
    var nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  });
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { links.classList.remove('open'); }); });

  var items = document.querySelectorAll('.tl-item');
  items.forEach(function (item) { item.classList.add('animate'); });
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); } }); }, { threshold: 0, rootMargin: '0px 0px -10px 0px' });
    items.forEach(function (item) { observer.observe(item); });
    setTimeout(function () { items.forEach(function (item) { item.classList.add('show'); }); }, 800);
  } else { items.forEach(function (item) { item.classList.add('show'); }); }

  var sections = document.querySelectorAll('[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  function updateActiveLink() {
    var current = '';
    sections.forEach(function (section) { if (window.scrollY + 120 >= section.offsetTop) current = section.id; });
    navLinks.forEach(function (link) { link.style.color = link.getAttribute('href') === '#' + current ? 'var(--gold)' : ''; });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();
