document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('qName').value;
    const phone = document.getElementById('qPhone').value;
    const service = document.getElementById('qService').value;
    const message = document.getElementById('qMessage').value;

    const subject = `Quote Request: ${service}`;
    const body = `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`;

    window.location.href = `mailto:info@globaltechworx.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
