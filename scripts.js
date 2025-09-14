// === Sidebar / Hamburger Menu ===
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const body = document.body;

let menuOpen = false;

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menuOpen = !menuOpen;

  if (menuOpen) {
    sidebar.style.left = '0px';
    body.classList.add('sidebar-open');  // 🔹 hide button
  } else {
    sidebar.style.left = '-260px';
    body.classList.remove('sidebar-open'); // 🔹 show button again
  }
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (menuOpen && !sidebar.contains(e.target) && e.target !== menuToggle) {
    sidebar.style.left = '-260px';
    menuOpen = false;
    body.classList.remove('sidebar-open'); // 🔹 show button again
  }
});

// === Theme Toggle ===
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
// ...existing code...

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
