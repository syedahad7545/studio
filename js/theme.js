export function setupThemeToggle() {
  const THEME_KEY = 'terminal-theme';
  const toggleContainer = document.querySelector('[data-theme-toggle]');
  
  if (!toggleContainer) return;

  const buttons = toggleContainer.querySelectorAll('.toggle__btn');
  
  // Get current theme from local storage or default to auto
  let currentTheme = localStorage.getItem(THEME_KEY) || 'auto';

  function applyTheme(theme) {
    const html = document.documentElement;
    html.classList.remove('theme-light', 'theme-dark');
    
    if (theme === 'light') {
      html.classList.add('theme-light');
    } else if (theme === 'dark') {
      html.classList.add('theme-dark');
    }
    
    // Update ARIA pressed state on buttons
    buttons.forEach(btn => {
      const isPressed = btn.getAttribute('data-theme-set') === theme;
      btn.setAttribute('aria-pressed', isPressed);
    });
  }

  // Initial application for the buttons state
  applyTheme(currentTheme);

  // Add click listeners
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeToSet = btn.getAttribute('data-theme-set');
      
      if (themeToSet === 'auto') {
        localStorage.removeItem(THEME_KEY);
      } else {
        localStorage.setItem(THEME_KEY, themeToSet);
      }
      
      currentTheme = themeToSet;
      applyTheme(currentTheme);
    });
  });
}
