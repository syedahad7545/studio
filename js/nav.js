export function setupNav() {
  const nav = document.querySelector('.nav');
  const toggleBtn = document.querySelector('.nav-mobile-toggle');
  
  if (!nav || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    if (isOpen) {
      nav.classList.remove('is-open');
      toggleBtn.textContent = 'MENU ↓';
    } else {
      nav.classList.add('is-open');
      toggleBtn.textContent = 'CLOSE ↑';
    }
  });

  // Highlight current page
  const currentPath = window.location.pathname;
  const navItems = nav.querySelectorAll('.nav__item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    // Basic matching for highlighting
    if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
      item.classList.add('is-current');
    } else if (href !== '/' && currentPath.startsWith(href)) {
      item.classList.add('is-current');
    }
  });
}
